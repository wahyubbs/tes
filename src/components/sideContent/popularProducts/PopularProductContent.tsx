"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/sideContent/popularProduct/popularProductContent.module.scss";

export function PopularProductContent({
  imgURL,
  title,
  slug,
  tgl,
}: {
  slug: string;
  imgURL: string;
  title: string;
  tgl: string;
}) {
  const route = useRouter();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        route.push(`/produk/${btoa(slug)}`);
      }}
      className={styles["content-bbs"]}
    >
      <Image
        alt="produk populer"
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
          <p>{tgl}</p>
        </div>
      </div>
    </div>
  );
}
