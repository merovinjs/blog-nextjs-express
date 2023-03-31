import React from "react";
import Note from "../note/note";

import styles from "./styles.module.css";
const Notlar = async () => {
  const data = await fetch(`${process.env.API_URI}/getPosts`, {
    cache: "no-cache",
  });
  const res = await data.json();
  if (data.ok) {
    console.log(res);
  }

  return (
    <div className={styles.page}>
      {res.getpost.map((note) => {
        return <Note note={note} key={note._id} />;
      })}
    </div>
  );
};

export default Notlar;
