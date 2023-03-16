import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  const data = await fetch(`${process.env.API_URI}/getPosts`, {
    cache: "no-store",
  });
  const res = await data.json();
  if (data.ok) {
    console.log(res);
  }
  return (
    <div>
      <h1>selam</h1>
      {res.getpost.map((ad) => (
        <div key={ad._id}>
          <h2>{ad.name}</h2>
        </div>
      ))}
    </div>
  );
}
