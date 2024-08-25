"use client";
import { Session } from "next-auth";
import React from "react";

const AuthContext = React.createContext<any>({
  user: {},
});
export default AuthContext;
export const useAuthContext = () => React.useContext(AuthContext);
