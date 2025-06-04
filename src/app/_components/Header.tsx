"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import InfoIcon from "@mui/icons-material/Info";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-4 mb-8 mx-auto w-[90%]">
      <div className="flex justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        {!session && (
          <div className="flex justify-center gap-1 items-center py-1 px-2 rounded-b-md border-mainBg">
            <InfoIcon htmlColor="#1976d2" fontSize="small"/>
            <span>
              <Link href="/login" className="underline">
                Login
              </Link>{" "}
              to like or save an image
            </span>
          </div>
        )}
        <div className="flex justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link href="/collection" className="hover:underline">
              My Collection
            </Link>
            {session && (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className=" px-2 py-1 rounded-md hover:underline"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
