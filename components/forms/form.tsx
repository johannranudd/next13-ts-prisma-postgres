"use client";
import React, { Component, useState } from "react";
import { useRouter } from "next/navigation";

// async function getUsers() {
//   const res = await fetch(`${process.env.BASE_URL}/api/users`);
//   if (!res.ok) {
//     console.log("res not ok in getUsers()", res);
//   }
//   return await res.json();
// }

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const submitData = {
      email,
      name,
      password,
    };
    if (name) {
      // todo: BASE_URL is currently undefined
      console.log(process.env.BASE_URL);
      console.log(`${process.env.BASE_URL}/api/users`);
      //   const t = getUsers();
      //   console.log(t);

      //   const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify( submitData ),
      //   });
    } //todo add email and pw
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      <label htmlFor="email">Email:</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        id="email"
        className="border border-black"
      />
      <label htmlFor="name">Name:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        id="name"
        className="border border-black"
      />
      <label htmlFor="password">Password:</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        id="password"
        className="border border-black"
      />
      <button
        type="submit"
        className="mt-6 p-2  bg-teal-700 rounded-md text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
