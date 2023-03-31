"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { MdDeleteSweep } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Note = ({ note }) => {
  const router = useRouter();
  const handledelete = async () => {
    await fetch(`https://nodejs-api-1yrr.onrender.com/deletePost/` + note._id, {
      method: "DELETE",
    });
    router.refresh("/notlar");
  };
  const RandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };
  let Random = RandomNumber();

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${Random}`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <p key={note._id}>{note.name}</p>
        <Link href={`${note._id}`}>yazının devamı...</Link>

        <span className={styles.span} onClick={handledelete}>
          Sil <MdDeleteSweep size={20} />
        </span>
      </div>
    </div>
  );
};

export default Note;
