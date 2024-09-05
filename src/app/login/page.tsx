"use client";
import React from "react";

import { SignInForm } from "../_components/SignInForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  return <SignInForm />;
};

export default Login;
