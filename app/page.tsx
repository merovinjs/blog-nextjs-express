import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.flexContainer}>
      <div>kutu1</div>
      <div>kutu1</div>
      <div>kutu1</div>
      <div>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}
