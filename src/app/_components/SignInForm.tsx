"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { signIn } from "next-auth/react";
import { authenticate } from "../utils/actions";

export function SignInForm() {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [state, action] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <section className=" md:w-1/2 mx-auto py-8 flex flex-col justify-center bg-white px-3 rounded-md w-full">
      <h2 className="text-center text-black font-semibold text-2xl">Login</h2>
      <form
        action={action}
        className="flex flex-col gap-7 p-5 justify-center items-center"
      >
        <div className="flex gap-4 w-full border rounded-xl  items-center px-2">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="form-control"
            value={"test1"}
            readOnly
            // onChange={(e) => setUsername(e.target.value)}
            required
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
            value={"pass"}
            readOnly
            className="form-control"
            //onChange={(e) => setPassword(e.target.value)}
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
        >
          Sign In
        </button>
        <div className="flex gap-3 items-center w-full">
          <button
            type="button"
            className="flex justify-center w-full py-2 rounded-xl border border-mainBg"
            aria-disabled={pending}
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <img src="/github.svg" width="24" height="24" alt="github" />
          </button>
          <button
            type="button"
            className="flex justify-center w-full py-2 rounded-xl border border-mainBg"
            aria-disabled={pending}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <img src="/google.svg" width="24" height="24" alt="google" />
          </button>
        </div>
      </form>
    </section>
  );
}
