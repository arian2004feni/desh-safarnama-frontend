import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";

const AuthNavs = () => {
  const { user, logout } = useAuth();

  const logoutUser = () => {
    logout()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((err) => {
        console.log("err on logout", err);
      });
  };

  if (user) {
    return (
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle avatar avatar-online ${
              user?.photoURL ? "" : "avatar-placeholder"
            }`}
          >
            <div
              className={`w-10 rounded-full ${
                user?.photoURL ? "" : "bg-neutral text-neutral-content"
              }`}
            >
              {user?.photoURL ? (
                <img
                  alt={user?.displayName || "User Avatar"}
                  src={user?.photoURL || "https://i.pravatar.cc/300"}
                />
              ) : (
                <span>{user?.displayName.charAt(0).toUpperCase()}</span>
              )}
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu- dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={logoutUser}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-end">
        <Link to="/auth/login" className="btn btn-ghost">
          Login
        </Link>
        <Link to="/auth/register" className="btn btn-primary ml-2">
          Register
        </Link>
      </div>
    );
  }
};

export default AuthNavs;
