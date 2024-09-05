"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
