"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/sideContent/populerNews/popularNewsContent.module.scss";
import { handleOnError } from "@/components/utils/handleImageError";

export function PopularNewsContent({
  imgURL,
  title,
  status,
  date,
  slug,
}: {
  slug: string;
  imgURL: string;
  title: string;
  status: string;
  date: string;
}) {
  const route = useRouter();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        route.push(`/ethosdaily/${btoa(slug)}`);
      }}
      className={styles["content-bbs"]}
    >
      <Image
        onError={handleOnError}
        alt="populer news"
        src={`${
          process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
            ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
            : process.env.NEXT_PUBLIC_URL_IMG
        }${imgURL}`}
        width={71}
        height={71}
      />
      <div className={styles["col-bbs"]}>
        <h1>{title}</h1>
        <div className={styles["row-bbs"]}>
          <p>{date}</p>
          <p> . </p> <p>{status}</p>
        </div>
      </div>
    </div>
  );
}
