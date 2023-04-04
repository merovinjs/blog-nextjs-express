import { Inter } from "next/font/google";
import Featured from "../container/featured/Featured";
import Hero from "../container/hero/Hero";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
export default async function Home() {
  return (
    <div className={styles.background}>
      <Hero />
      <Featured />
    </div>
  );
}
