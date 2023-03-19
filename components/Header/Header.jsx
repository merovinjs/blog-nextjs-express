import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/beats.svg";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image className={styles.logo} src={logo} alt="logo" width={65} />
      </Link>
      <nav>
        <Link href="/notlar" className={styles.header}>
          Bloglar
        </Link>
        <Link
          href="https://github.com/Proprogam
        "
          target="_blank"
        >
          Hakkımda
        </Link>
        <Link href="/notekle" className={styles.kesfet}>
          Keşfet
        </Link>
      </nav>
    </header>
  );
};

export default Header;
