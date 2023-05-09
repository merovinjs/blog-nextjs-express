"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import styles from "./styles.module.css";
import { BiLogIn } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="oldbee.vercel.app" width={85} />
      </Link>
      <nav ref={navRef}>
        <Link onClick={showNavbar} href="/notlar">
          Bloglar
        </Link>
        <Link
          onClick={showNavbar}
          href="https://github.com/oldbeedev
        "
          target="_blank"
        >
          Hakkımda
        </Link>
        <Link onClick={showNavbar} href="/notekle" className={styles.kesfet}>
          Keşfet
        </Link>
        <Link onClick={showNavbar} href="/auth">
          <BiLogIn color="red" size="2em" />
        </Link>
        <button
          className={styles.close_btn + " " + styles.nav_btn}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles.nav_btn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
