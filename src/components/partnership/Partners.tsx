"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/partnership/index.module.scss";
import { handleOnError } from "../utils/handleImageError";
import Loading from "../utils/Loading";
import { getMitra } from "@/app/api/getMitra";

function Partners() {
  const [dataMitra, setDataMitra] = useState<any>(null);

  const getData = async () => {
    const resp = await getMitra();
    if (resp) setDataMitra(resp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {dataMitra ? (
        dataMitra.map((data: any, index: number) =>
          data.keterangan ? (
            <a
              className={styles["img-bbs"]}
              key={index}
              href={`https://${data.keterangan}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                onError={handleOnError}
                src={`${
                  process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                    ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                    : process.env.NEXT_PUBLIC_URL_IMG
                }${data.imagenya}`}
                fill={true}
                sizes="100vw"
                alt="partnership"
              />
            </a>
          ) : (
            <Link className={styles["img-bbs"]} key={index} href="/nolink">
              <Image
                onError={handleOnError}
                src={data.image}
                fill={true}
                sizes="100vw"
                alt="partnership"
              />
            </Link>
          )
        )
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Partners;
