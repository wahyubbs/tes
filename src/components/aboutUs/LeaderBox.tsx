"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/aboutUs/leaderBox.module.scss";
import PopupDetail from "./PopupDetail";

export function LeaderBox({
  imgURL,
  name,
  title,
}: {
  imgURL: string;
  name: string;
  title: string;
}) {
  const [isPopupActive, setIsPopupActive] = useState(false);
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();

          setIsPopupActive(true);
        }}
        className={styles["box-bbs"]}
      >
        <div className={styles["image-container-bbs"]}>
          <div className={styles["image-bbs"]}>
            <Image src={imgURL} alt="people" fill={true} sizes="100vw" />
          </div>
        </div>

        <div className={styles["description-bbs"]}>
          <div>
            <h1>{name}</h1>

            <p>{title}</p>
          </div>
        </div>
      </div>
      {isPopupActive && (
        <PopupDetail
          isPopupActive={isPopupActive}
          setIsPopupActive={setIsPopupActive}
          imgURL={imgURL}
          title={title}
          name={name}
        />
      )}
    </>
  );
}
