"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Note = ({ note }) => {
  const router = useRouter();
  const handledelete = async () => {
    await fetch(`https://nodejs-api-1yrr.onrender.com/deletePost/` + note._id, {
      method: "DELETE",
    });
    router.refresh("/notlar");
  };

  return (
    <div>
      <h3 key={note._id}>
        {note.name}
        <span onClick={handledelete}> X</span>
      </h3>
    </div>
  );
};

export default Note;
