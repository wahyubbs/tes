"use client";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import styles from "@/styles/aboutUs/popupDetail.module.scss";

export default function PopupDetail({
  imgURL,
  name,
  title,
  isPopupActive,
  setIsPopupActive,
}: {
  isPopupActive: boolean;
  setIsPopupActive: (isActive: boolean) => void;
  imgURL: string;
  name: string;
  title: string;
}) {
  const instagramImg = "/img/icon/socialMedia/instagram.png";
  const linkedinImg = "/img/icon/socialMedia/linkedin.png";
  const facebookImg = "/img/icon/socialMedia/facebook.png";

  return (
    <div className={styles["popup-container-bbs"]}>
      <div className={styles["popup-bbs"]}>
        <div className={styles["row-bbs"]}>
          <Image
            className={styles["image-bbs"]}
            src={imgURL}
            width={54}
            height={54}
            alt={name}
          />
          <div className={styles["highligth-bbs"]}>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div className={styles["social-media-bbs"]}>
              <Image
                width={28}
                height={28}
                src={linkedinImg}
                alt={linkedinImg}
              />
              <Image
                width={28}
                height={28}
                src={instagramImg}
                alt={instagramImg}
              />
              <Image
                width={28}
                height={28}
                src={facebookImg}
                alt={facebookImg}
              />
            </div>
          </div>
        </div>
        <p className={styles["description-bbs"]}>Deskripsi</p>
        <AiOutlineClose
          onClick={(e) => {
            e.preventDefault();
            setIsPopupActive(false);
          }}
          className={styles["close-btn-bbs"]}
        />
      </div>
    </div>
  );
}
