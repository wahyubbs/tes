"use client";
import { Metadata } from "next";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "@/styles/login/loginPage.module.scss";
import { useContextProvider } from "@/context/ContextProvider";
import checkUser from "../api/checkUser";

export default function Login() {
  const [secretCode, setSecretCode] = useState("");
  const router = useRouter();
  const { setIsLogin } = useContextProvider();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isMatch = await checkUser(secretCode);
    if (isMatch) {
      setIsLogin(true);
      localStorage.setItem("secret-code", Math.random().toString());
      router.push("/");
    } else {
      alert("Secret code salah!! Coba lagi !!.");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.loginCardContent}>
          <div className={styles.loginCardTitle}>
            <h2>Login Development</h2>
            <div className={styles.loginUnderlineTitle}></div>
          </div>
          <form className={styles.loginCardBody} onSubmit={handleSubmit}>
            <label>Secret Code :</label>
            <input
              className={styles.loginFormInput}
              type="password"
              value={secretCode}
              onChange={(event) => setSecretCode(event.target.value)}
            />
            <div className={styles.loginFormBorder}></div>
            <button className={styles.loginSubmitButton} type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
