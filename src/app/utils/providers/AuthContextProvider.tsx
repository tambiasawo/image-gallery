import React from "react";
import { Session } from "next-auth";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";

export const AuthContextProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
};
