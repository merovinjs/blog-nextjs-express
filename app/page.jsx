import { Inter } from "next/font/google";
import Featured from "../container/featured/Featured";
import Hero from "../container/hero/Hero";
import styles from "./page.module.css";

import { Metadata } from "next";
export const metadata = {
  title: "blog website for next.js 13.4",
  description: "oldbee.vercel.app blog website for next.js developers",
  keywords:
    "blog, next.js, oldbee, vercel.app, blog website, next.js blog website, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next.js developer blog website, next.js developer blog, next,next.js 13.4",
  image: "/public/logo.svg",
  url: "https://oldbee.vercel.app/",
  type: "website",
  site_name: "oldbee.vercel.app",
  locale: "en_US",
  githubUsername: "oldbeedev",
  author: "github/oldbeedev",
  creator: "oldbee.vercel.app",
  publisher: "oldbee.vercel.app",
  publisher_email: "k.kartal9595@gmail.com",
  publisher_name: "oldbee.vercel.app",
  publisher_url: "https://oldbee.vercel.app/",
  image_alt: "oldbee.vercel.app",
};

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  return (
    <div className={styles.background}>
      <Hero />
      <Featured />
    </div>
  );
}
