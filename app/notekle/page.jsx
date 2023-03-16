"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hata, setHata] = useState(null);

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
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setHata(json.hata);
    }
    if (response.ok) {
      setHata(null);
      setName("");
      setDescription("");
      console.log("Yeni not eklendi", json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">name</label>
        <input
          type="text"
          id="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text">Açıklma</label>
        <input
          type="text"
          id="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
      {hata && <div>{hata}</div>}
    </form>
  );
};

export default Page;
