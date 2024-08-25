"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GithubLoginAction } from "../actions";

const GithubLogin = () => {
  return (
    <div
      className="flex justify-center gap-2"
      onClick={() => {
        GithubLoginAction("github");
      }}
    >
      <GitHubIcon className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
};

export default GithubLogin;
