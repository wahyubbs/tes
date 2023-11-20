"use client";
import Image from "next/image";

import styles from "@/styles/career/modalCareer.module.scss";
import { handleOnError } from "../utils/handleImageError";

function ModalCareer({
  imgURL,
  setIsModalActive,
}: {
  imgURL: string;
  setIsModalActive: (isActive: boolean) => void;
}) {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setIsModalActive(false);
      }}
      className={styles["container-bbs"]}
    >
      <div className={styles["img-wrapper-bbs"]}>
        <Image
          onError={handleOnError}
          src={`${
            process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
              ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
              : process.env.NEXT_PUBLIC_URL_IMG
          }${imgURL}`}
          fill={true}
          sizes="100vw"
          alt="carrer"
        />
      </div>
    </div>
  );
}

export default ModalCareer;
