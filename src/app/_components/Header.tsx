"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import InfoIcon from "@mui/icons-material/Info";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-4 mb-8 mx-auto w-[90%]">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        {!session && (
          <div className="flex justify-center gap-1 items-center py-1 px-2 rounded-b-md border-mainBg">
            <InfoIcon htmlColor="#1976d2" fontSize="small" />
            <span>
              <Link href="/login" className="underline text-center">
                Login
              </Link>{" "}
              to like or save an image
            </span>
          </div>
        )}
        <div className="flex justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href="/collection"
              className="hidden md:block hover:underline"
            >
              My Collection
            </Link>
            <Link
              href="/collection"
              className="block md:hidden hover:underline"
            >
              <FolderSpecialIcon className="" htmlColor="#1976d2"/>
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
