import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import img1 from "../../public/icon-access-anywhere.svg";
import img2 from "../../public/icon-security.svg";
import img3 from "../../public/icon-collaboration.svg";
import img4 from "../../public/icon-any-file.svg";

const Featured = () => {
  return (
    <section id={styles.features}>
      <div className={styles.featurecard}>
        <div className={styles.featurecardimage}>
          <Image src={img1} height={88} alt="img1" />
        </div>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          officiis dolores incidunt nesciunt.
        </p>
      </div>
      <div className={styles.featurecard}>
        <div className={styles.featurecardimage}>
          <Image src={img3} height={88} alt="img3" />
        </div>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          officiis dolores incidunt nesciunt.
        </p>
      </div>
      <div className={styles.featurecard}>
        <div className={styles.featurecardimage}>
          <Image src={img2} alt="img1" height={88} />
        </div>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          officiis dolores incidunt nesciunt.
        </p>
      </div>
      <div className={styles.featurecard}>
        <div className={styles.featurecardimage}>
          <Image src={img4} alt="img4" height={88} />
        </div>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          officiis dolores incidunt nesciunt.
        </p>
      </div>
    </section>
  );
};

export default Featured;
