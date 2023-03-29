"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { MdDeleteSweep } from "react-icons/md";
import Link from "next/link";

const Note = ({ note }) => {
  const router = useRouter();
  const handledelete = async () => {
    await fetch(`https://nodejs-api-1yrr.onrender.com/deletePost/` + note._id, {
      method: "DELETE",
    });
    router.refresh("/notlar");
  };

  return (
    <div className={styles.note}>
      <Link href={`${note._id}`}>git</Link>
      <h3 key={note._id}>{note.name}</h3>
      <MdDeleteSweep size={40} className={styles.span} onClick={handledelete} />
    </div>
  );
};

export default Note;
