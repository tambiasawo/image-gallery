"use client";
import React from "react";

const AuthContext = React.createContext<any>({
  user: {},
});
export default AuthContext;
export const useAuthContext = () => React.useContext(AuthContext);
