import React from "react";

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
      {res.getpost.map((ad) => (
        <div key={ad._id}>
          <h2>{ad.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Notlar;
