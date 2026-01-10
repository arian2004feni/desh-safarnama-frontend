import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
