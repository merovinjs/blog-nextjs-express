"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
const Page = () => {
  const [signUp, setSignup] = useState(true);
  const [authdata, setAuthdata] = useState({
    username: "",
    email: "",
    passwords: "",
  });

  const handleInput = (e) => {
    setAuthdata({ ...authdata, [e.target.name]: e.target.value });
  };
  console.log(authdata);

  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <div className={styles.title}>
          {signUp ? "Kayıt olunuz" : "Giriş yap"}
        </div>

        {signUp && (
          <div className={`${styles.inputcontainer} ${styles.ic1}`}>
            <input
              onChange={handleInput}
              value={authdata.username}
              name="username"
              id="username"
              className={styles.input}
              type="text"
              placeholder=" "
            />
            <div className={styles.cut}></div>
            <label for="username" className={styles.placeholder}>
              Kullanıcı Adı
            </label>
          </div>
        )}
        <div className={`${styles.inputcontainer} ${styles.ic2}`}>
          <input
            onChange={handleInput}
            value={authdata.email}
            name="email"
            id="email"
            className={styles.input}
            type="email"
            placeholder=" "
          />
          <div className={styles.cut}></div>
          <label for="email" className={styles.placeholder}>
            Email
          </label>
        </div>
        <div className={`${styles.inputcontainer} ${styles.ic3}`}>
          <input
            onChange={handleInput}
            value={authdata.passwords}
            name="passwords"
            id="password"
            className={styles.input}
            type="password"
            placeholder=" "
          />
          <div className={styles.cut}></div>
          <label for="password" className={styles.placeholder}>
            Parola
          </label>
        </div>

        <button type="text" className={styles.submit}>
          {signUp ? "Kayıt ol" : "giriş yap"}
        </button>
        <div>
          {signUp ? (
            <div className={styles.warning} onClick={() => setSignup(false)}>
              Üye Girişi
            </div>
          ) : (
            <div className={styles.warning} onClick={() => setSignup(true)}>
              Daha önce kayıt olmadınız mı ?
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
