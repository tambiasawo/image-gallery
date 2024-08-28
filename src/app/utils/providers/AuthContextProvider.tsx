import React from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export const AuthContextProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return <SessionProvider session={null}>{children}</SessionProvider>;
};
