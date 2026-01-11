import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { BiHide, BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { LuUser } from "react-icons/lu";
import { PiRepeat } from "react-icons/pi";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, profileSetup } = useAuth();

  const passwordValue = watch("password");
  const repeatPasswordValue = watch("repeatPassword");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [repeatPasswordFocused, setRepeatPasswordFocused] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    createUser(data.email, data.password)
      .then((result) => {
        console.log("User registered:", result);
        profileSetup({ displayName: data.username })
          .then(() => {
            console.log("success: name update");
          })
          .catch((err) => {
            console.log("err in profileUpdate", err);
          });
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  return (
    <>
      <h1 className="text-4xl font-heading font-semibold">Wellcome </h1>
      <p className="opacity-60 mb-5 mt-2 text-sm">
        Please enter your details here{" "}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <div className="mb-3">
            <label className="label" htmlFor="username">
              Username
            </label>
            <label className="input w-full mt-1">
              <LuUser className="h-[1em] opacity-50" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Username must not exceed 15 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: "Username can contain only letters, numbers and _",
                  },
                })}
              />
            </label>
            {errors.username && (
              <p className="text-red-600 mt-2">{errors.username.message}</p>
            )}
          </div>

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

          <div className="">
            <label className="label" htmlFor="repeatPassword">
              Repeat Password
            </label>
            <label className="input w-full mt-1">
              <PiRepeat className="h-[1em] opacity-50 font-extralight" />
              <input
                type={showPasswordRepeat ? "text" : "password"}
                id="repeatPassword"
                placeholder="Repeat Password"
                {...register("repeatPassword", {
                  required: "Repeat password is required",
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match",
                })}
                onFocus={() => setRepeatPasswordFocused(true)}
                onBlur={() => setRepeatPasswordFocused(false)}
              />
              <span
                className={`${
                  repeatPasswordFocused || repeatPasswordValue
                    ? "visible"
                    : "invisible"
                }`}
              >
                {showPasswordRepeat === false ? (
                  <BiHide
                    className="text-xl cursor-pointer font-extralight size-7 p-1"
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  />
                ) : (
                  <BiShow
                    className="text-xl cursor-pointer font-extralight size-7 p-1"
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  />
                )}
              </span>
            </label>
            {errors.repeatPassword && (
              <p className="text-red-600 mt-2">
                {errors.repeatPassword.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-neutral mt-3">
            Register
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Register;
