"use client";

import React, { useState } from "react";

import styles from "@/styles/home/mitraSection/formJoinPartnership.module.scss";
import joinPartnership from "@/app/api/joinPartnership";

function FormJoinPartnership() {
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
    <>
      <form className={styles["form-join-bbs"]}>
        <input
          value={email}
          onChange={handleChange}
          type="text"
          placeholder="Your email ..."
        />

        <button
          onClick={async (e) => {
            e.preventDefault();
            if (message === "") {
              joinPartnership(email);
              setMessage("Berhasil subscribe newsletter");
            }
          }}
        >
          Send
        </button>
      </form>
      {message === "Email is invalid" ? (
        <p style={{ color: "red" }}>{message}</p>
      ) : (
        <p style={{ color: "white" }}>{message}</p>
      )}
    </>
  );
}

export default FormJoinPartnership;
