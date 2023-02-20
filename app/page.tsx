// "use client";
import Link from "next/link";
// import React, { useState } from "react";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/routes`);
  if (!res.ok) {
    console.log("res not ok in getPosts()", res);
  }
  return await res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();
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
