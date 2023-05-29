import React from "react";
import styles from "./styles.module.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import adress from "../../public/icon-location.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoFooter}>
        <Image
          className={styles.logo}
          height={116}
          src={logo}
          alt="logo"
          width={55}
        />
      </div>
      <div className={styles.adress}>
        <Image src={adress} alt="adress" />
        <p>
          <b>
            <i>Adresimiz: </i>
          </b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis
          dolore doloremque velit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur atque, delectus accusantium natus quaerat
          praesentium unde accusamus facilis quod ratione pariatur. Libero
          similique deleniti quas illum explicabo doloremque quam
        </p>
      </div>
      <div className={styles.contact}>
        <Link href="/">Anasayfa</Link>
        <Link
          href="https://github.com/oldbeedev
        "
        >
          Hakkımda
        </Link>
        <Link href="/notlar">Bloglar</Link>
      </div>
    </footer>
  );
};

export default Footer;
