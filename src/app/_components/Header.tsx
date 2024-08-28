"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { Tooltip } from "@mui/material";
//import { logout } from "../actions";

const Header = ({ isLoggedIn }: { isLoggedIn?: boolean }) => {
  return (
    <div className="mt-4 mb-8">
      <div className="flex justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>

        <div className="flex justify-between gap-3">
          <Tooltip title="Coming Soon...">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </Tooltip>
          <Link href="/collection" className="hover:underline">
            My Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
