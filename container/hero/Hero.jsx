"use client";
import React from "react";
import styles from "./styles.module.css";
import HeroImage from "../../public/illustration-intro.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id={styles.container}>
      <div className={styles.heroImage}>
        <Image src={HeroImage} alt="hero-image" />
      </div>
      <div className={styles.desc}>
        <h1>Yazılım çözümleri ile şirketlerinize destek oluyoruz</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          voluptatibus officia, atque laudantium voluptatem ipsum eligendi.
          Nihil veritatis ipsam consectetur odio quisquam illum, facere tempora
          laboriosam at aperiam, sapiente aliquam dignissimos quia repudiandae
          ratione nemo.
        </p>
        <button className="primary-button">Get Start</button>
      </div>
    </section>
  );
};

export default Hero;
