"use client";
import React from "react";
import Filters from "./_components/ui/Filters";
import Gallery from "./_components/Gallery";

export default function Home() {
  return (
    <main className="text-center">
      <Filters />
      <Gallery />
    </main>
  );
}
