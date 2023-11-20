"use client";

import { useState } from "react";

import styles from "@/styles/sideContent/newsLetter.module.scss";
import joinPartnership from "@/app/api/joinPartnership";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: any) => {
    if (!isValidEmail(event.target.value)) {
      setMessage("Email is invalid");
    } else {
      setMessage("");
    }
    setEmail(event.target.value);
  };

  return (
    <div className={styles["container-bbs"]}>
      <h1>Newsletter</h1>
      <p>
        Kami akan mengirimkan informasi seputar promosi, berita terbaru, produk
        terbaru, dan berbagai acara menarik kami.
      </p>
      <form>
        <input
          value={email}
          onChange={handleChange}
          placeholder="Alamat email anda ..."
        />
        {message === "Email is invalid" ? (
          <p className={styles["error-bbs"]} style={{ color: "red" }}>
            {message}
          </p>
        ) : (
          <p className={styles["error-bbs"]} style={{ color: "black" }}>
            {message}
          </p>
        )}
        <button
          onClick={async (e) => {
            e.preventDefault();
            if (message === "") {
              joinPartnership(email);
              setMessage("Berhasil subscribe newsletter");
            }
          }}
        >
          Berlangganan
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
