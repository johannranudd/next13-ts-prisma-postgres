"use client";
import Link from "next/link";
// import React, { useState } from "react";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/routes");
  // const data = await res.json();
  // return data;
  if (!res.ok) {
    console.log(res);
  }
  return await res.json();
}

export default async function Home() {
  const data = await getPosts();
  console.log("DATA:::::::::::::::::::::::::::::.:", data);
  return (
    <main>
      <Link
        href={"/dashboard"}
        className="inline-block bg-teal-700 text-black font-medium py-2 px-10 rounded-md"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
