"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-4 mb-8">
      <div className="flex justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>

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
