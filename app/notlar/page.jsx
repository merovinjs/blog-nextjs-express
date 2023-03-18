import React from "react";
import Note from "./note";

const Notlar = async () => {
  const data = await fetch(`${process.env.API_URI}/getPosts`, {
    cache: "no-store",
  });
  const res = await data.json();
  if (data.ok) {
    console.log(res);
  }

  return (
    <div style={{ color: "white" }}>
      {res.getpost.map((note) => {
        return <Note note={note} key={note._id} />;
      })}
    </div>
  );
};

export default Notlar;
