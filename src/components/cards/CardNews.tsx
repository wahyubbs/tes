"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/cards/cardNews.module.scss";
import MoreButton from "../buttons/MoreButton";
import { handleOnError } from "../utils/handleImageError";

function CardNews({
  imgUrl,
  date,
  status,
  title,
  description,
  category,
  slug,
}: {
  slug: string;
  category: string;
  imgUrl: string;
  status: string;
  date: string;
  title: string;
  description: string;
}) {
  const route = useRouter();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();

        route.push(`/ethosdaily/${btoa(slug)}`);
      }}
      className={styles["container-bbs"]}
    >
      <div className={styles["image-container-bbs"]}>
        <Image
          onError={handleOnError}
          alt="news"
          fill={true}
          priority
          sizes="100vw"
          src={`${
            process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
              ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
              : process.env.NEXT_PUBLIC_URL_IMG
          }${imgUrl}`}
        />
        <h1 className={styles["category-bbs"]}>{category} </h1>
      </div>
      <div className={styles["content-container-bbs"]}>
        {date !== "" && (
          <div className={styles["tag-container-bbs"]}>
            <p>{date}</p>
            <p>{status}</p>
          </div>
        )}
        <h3 className={styles["title-bbs"]}>{title}</h3>
        <p className={styles["tgl-mobile-bbs"]}>{date}</p>
        <div className={styles["description-bbs"]}>
          <p>{description} </p>
        </div>

        <div className={styles["more-btn-bbs"]}>
          <MoreButton url={`/ethosdaily/${btoa(slug)}`} />
        </div>
      </div>
    </div>
  );
}

export default CardNews;
