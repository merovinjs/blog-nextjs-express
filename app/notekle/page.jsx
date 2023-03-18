"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/globals.css";

const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const not = { name, description };

    const response = await fetch(
      `https://nodejs-api-1yrr.onrender.com/createPosts`,
      {
        method: "POST",
        body: JSON.stringify(not),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setHata(json.hata);
    }
    if (response.ok) {
      setName("");
      setDescription("");
      console.log("Yeni not eklendi", json);
      router.push("/notlar");
      router.refresh("/notlar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text" style={{ color: "red" }}>
          name
        </label>
        <input
          type="text"
          id="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text" style={{ color: "red" }}>
          Açıklma
        </label>
        <input
          type="text"
          id="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Page;
