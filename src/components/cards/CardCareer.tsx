"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/cards/cardCareer.module.scss";
import ModalCareer from "../career/ModalCareer";
import { handleOnError } from "../utils/handleImageError";

function CardCareer({ imgUrl, linkURL }: { imgUrl: string; linkURL: string }) {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <div className={styles["card-container-bbs"]}>
        <div
          onClick={(e) => {
            e.preventDefault();
            setIsModalActive(true);
          }}
          className={styles["image-container-bbs"]}
        >
          <Image
            onError={handleOnError}
            alt="carrer"
            fill={true}
            priority={true}
            sizes="100vw"
            src={`${
              process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                : process.env.NEXT_PUBLIC_URL_IMG
            }${imgUrl}`}
          />
        </div>
        <div className={styles["content-container-bbs"]}>
          <a
            href={`https://${linkURL}`}
            className={styles["apply-btn-bbs"]}
            target="_blank"
            rel="noreferrer"
          >
            Apply
          </a>
        </div>
      </div>
      {isModalActive && (
        <ModalCareer setIsModalActive={setIsModalActive} imgURL={imgUrl} />
      )}
    </>
  );
}

export default CardCareer;
