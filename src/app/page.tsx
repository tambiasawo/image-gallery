"use client";
import React from "react";
import Filters from "./_components/ui/Filters";
import Gallery from "./_components/Gallery";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <main className="container mx-auto space-y-8">
      <Filters />
      <Gallery />
    </main>
  );
}
