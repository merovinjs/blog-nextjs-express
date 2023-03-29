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
  return <div className={styles.div}>{detail.detailPost.name}</div>;
};

export default Page;
