import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    // Add authentication-related information here
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
