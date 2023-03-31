import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
const getPost = async (id) => {
  const data = await fetch(
    `https://nodejs-api-1yrr.onrender.com/getDetail/${id}`
  );
  return data.json();
};

const Page = async ({ params }) => {
  const detail = await getPost(params.id);
  console.log(detail);

  const RandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };
  let Random = RandomNumber();

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          fill
          src={`https://picsum.photos/960/400?random=${Random}`}
          alt="photo"
        />
      </div>
      <div className={styles.div}>{detail.detailPost.name}</div>
    </div>
  );
};

export default Page;
