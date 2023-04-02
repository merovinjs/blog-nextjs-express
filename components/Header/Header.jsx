import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/oldbee2.png";
import styles from "./styles.module.css";
import { BiLogIn } from "react-icons/bi";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image className={styles.logo} src={logo} alt="logo" width={85} />
      </Link>
      <nav>
        <Link href="/notlar" className={styles.header}>
          Bloglar
        </Link>
        <Link
          className={styles.header}
          href="https://github.com/oldbeedev
        "
          target="_blank"
        >
          Hakkımda
        </Link>
        <Link href="/notekle" className={styles.kesfet}>
          Keşfet
        </Link>
        <Link href="/auth" className={styles.header}>
          <BiLogIn color="red" size="2em" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
