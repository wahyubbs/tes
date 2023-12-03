"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/cards/cardNews.module.scss";
import MoreButton from "../buttons/MoreButton";
import { handleOnError } from "../utils/handleImageError";
import Button from "../buttons/Button";
import { ButtonType } from "../../models/ButtonType";
import { HeaderMenuType } from "@/models/HeaderMenuType";

function CardNews({
  imgUrl,
  date,
  status,
  title,
  description,
  category,
  slug,
  priority,
}: {
  slug: string;
  category: string;
  imgUrl: string;
  status: string;
  date: string;
  title: string;
  description: string;
  priority: boolean;
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
          unoptimized
          priority={priority}
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
          <Button
            style={{
              width: "100%",
              marginTop: "auto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.003em",
            }}
            variant={ButtonType.WHITEHOVERED}
            url={`/ethosdaily/${btoa(slug)}`}
            title="Selengkapnya"
            menuName={HeaderMenuType.ETHOS_DAILY}
          />
        </div>
      </div>
    </div>
  );
}

export default CardNews;
