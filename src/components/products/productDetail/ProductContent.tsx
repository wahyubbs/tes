"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { HeaderMenuType } from "@/models/HeaderMenuType";
import CardProduct from "@/components/cards/CardProduct";
import SeeAllButton from "@/components/buttons/SeeAllButton";
import styles from "@/styles/products/content.module.scss";
import { handleOnError } from "@/components/utils/handleImageError";
import { useContextProvider } from "@/context/ContextProvider";
import Loading from "@/components/utils/Loading";

function ProductContent({
  product,
  otherProduct,
}: {
  product: any;
  otherProduct: any[];
}) {
  const route = useRouter();
  return (
    <div className={styles["container-bbs"]}>
      {product ? (
        <>
          <div className={styles["image-product-bbs"]}>
            <Image
              alt="produk"
              src={`${
                process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  : process.env.NEXT_PUBLIC_URL_IMG
              }${product.image}`}
              fill={true}
              onError={handleOnError}
              sizes="100vw"
            />
          </div>
          <div className={styles["date-container-bbs"]}>
            <p>{product.kategori}</p>
          </div>
          <p>Penulis : {product.penulisnya}</p>
          <h1 className={styles["title-bbs"]}>{product.judulnya}</h1>
          <div
            className={styles["description-bbs"]}
            dangerouslySetInnerHTML={{ __html: product.isinya }}
          ></div>

          <div className={styles["other-products-container-bbs"]}>
            <h1 className={styles["title-bbs"]}>Produk Terkait</h1>
            <div className={styles["other-products-bbs"]}>
              {otherProduct &&
                otherProduct.map((data: any, index: number) => (
                  <CardProduct
                    key={index}
                    slug={data.slugnya}
                    isResponsive={true}
                    isActive={true}
                    imgUrl={data.image}
                    title={data.judulnya}
                    description={data.isiproduk}
                    category={data.kategori}
                  />
                ))}
            </div>
            <div className={styles["seeAll-btn-container"]}>
              <SeeAllButton
                url="/produk"
                title="Lihat Semua Produk"
                menuName={HeaderMenuType.PRODUK}
              />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductContent;
