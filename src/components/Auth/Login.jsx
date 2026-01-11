import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { BiHide, BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signIn } = useAuth();

  const passwordValue = watch("password");

  const [showPassword, setShowPassword] = useState(false);

  const [passwordFocused, setPasswordFocused] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);

    signIn(data.email, data.password)
      .then(() => {
        // console.log("User signed in:", result);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  return (
    <>
      <h1 className="text-4xl font-heading font-semibold">Login</h1>
      <p className="opacity-60 mb-5 mt-2 text-sm">
        Please enter your details here{" "}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          {/* email */}
          <div className="mb-3">
            <label className="label" htmlFor="email">
              Email
            </label>
            <label className="input w-full mt-1">
              <CiMail className="h-[1em] opacity-50" />
              <input
                type="email"
                id="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
            </label>
            {errors.email && (
              <p className="text-red-600 mt-2">{errors.email.message}</p>
            )}
          </div>
          {/* Password */}
          <div className="mb-3">
            <label className="label" htmlFor="password">
              Password
            </label>
            <label className="input w-full mt-1">
              <IoKeyOutline className="h-[1em] opacity-50 font-extralight" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password must not exceed 30 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[0-9]).*$/,
                    message:
                      "Password must contain at least 1 uppercase letter and 1 number",
                  },
                })}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <span
                className={`${
                  passwordFocused || passwordValue ? "visible" : "invisible"
                }`}
              >
                {showPassword === false ? (
                  <BiHide
                    className="text-xl cursor-pointer font-extralight size-7 p-1"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <BiShow
                    className="text-xl cursor-pointer font-extralight size-7 p-1"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
            </label>
            {errors.password && (
              <p className="text-red-600 mt-2">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-neutral mt-3">
            Login
          </button>
        </fieldset>
      </form>
      <p className="mt-3 text-center text-sm">
        Don't have an account?{" "}
        <Link to="/auth/register" className="link text-info">
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
