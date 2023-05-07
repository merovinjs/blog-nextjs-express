"use client";
import React from "react";
import styles from "./styles.module.css";
import HeroImage from "../../public/bilgisayar.gif";
import Image from "next/image";

const Hero = () => {
  return (
    <section id={styles.container}>
      <div className={styles.heroImage}>
        <Image src={HeroImage} alt="hero-image" />
      </div>
      <div className={styles.desc}>
        <h1>Yazılım çözümleri ile şirketlerinize destek oluyoruz</h1>

        <button className="primary-button">Başlayalım 😊</button>
      </div>
    </section>
  );
};

export default Hero;
