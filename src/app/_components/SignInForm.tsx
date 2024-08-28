"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
//import { authenticate } from "../actions";
import GithubLogin from "./GithubLogin";
import { credentialsLogin, GithubLoginAction } from "../actions";
import { redirect } from "next/navigation";

export function SignInForm() {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  //const [state, action] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  const signInHandler = () => {
    console.log("signing in");
    redirect("/");
  };

  return (
    <section className=" md:w-1/2 mx-auto py-8 flex flex-col justify-center bg-white  px-3 rounded-md w-[90%]">
      <h2 className="text-center text-black font-semibold text-2xl">Login</h2>
      <form
        // action={action}
        className="flex flex-col gap-7 p-5 justify-center items-center"
      >
        <div className="flex gap-4 w-full border rounded-xl  items-center px-2">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="form-control"
            value={"admin1"}
            required
            readOnly
          />

          <span className="text-slate-300">
            <AlternateEmailIcon />
          </span>
        </div>

        <div className="w-full rounded-xl border flex items-center justify-between">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={"admin1"}
            className="form-control"
            readOnly
          />
          <span
            className="ring-blue-600 pr-3 focus:color-bg-formBg cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <FingerprintIcon />
          </span>
        </div>

        <button
          type="submit"
          className="bg-mainBg w-full py-2 rounded-xl"
          aria-disabled={pending}
          onClick={signInHandler}
        >
          Sign In
        </button>
        {/*   <button
          type="button"
          className="bg-mainBg w-full py-2 rounded-xl border border-mainBg"
          aria-disabled={pending}
          onClick={() => GithubLoginAction("github")}
        >
          <GithubLogin />
        </button> */}
      </form>
    </section>
  );
}
