"use client";

import Image from "next/image";

import styles from "@/styles/cards/cardProduct.module.scss";
import MoreButton from "../buttons/MoreButton";
import { useRouter } from "next/navigation";
import { handleOnError } from "../utils/handleImageError";
import Button from "../buttons/Button";
import { ButtonType } from "../../models/ButtonType";
import { HeaderMenuType } from "@/models/HeaderMenuType";

function CardProduct({
  imgUrl,
  title,
  description,
  isActive,
  isResponsive,
  category,
  slug,
  priority,
}: {
  slug: string;
  isActive: boolean;
  isResponsive: boolean;
  imgUrl: string;
  title: string;
  description: string;
  category: string;
  priority: boolean;
}) {
  const route = useRouter();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        route.push(`/produk/${btoa(slug)}`);
      }}
      className={` ${styles["container-bbs"]} ${
        isResponsive ? styles["card-responsive-bbs"] : null
      }`}
    >
      <div className={styles["image-container-bbs"]}>
        <Image
          onError={handleOnError}
          alt="produk"
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
        <h3 className={styles["title-bbs"]}>{title}</h3>
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
            title="Selengkapnya"
            url={`/produk/${btoa(slug)}`}
            menuName={HeaderMenuType.PRODUK}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
