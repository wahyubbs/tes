"use client";
import Image from "next/image";

import { handleOnError } from "@/components/utils/handleImageError";
import styles from "@/styles/aboutUs/index.module.scss";
import Loading from "../utils/Loading";

function HistorySection({ dataHistory }: { dataHistory: any }) {
  return (
    <section id="history" className={styles["history-container-bbs"]}>
      <>
        <div className={styles["img-bbs"]}>
          <Image
            onError={handleOnError}
            alt="history"
            src={`${
              process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                : process.env.NEXT_PUBLIC_URL_IMG
            }${dataHistory ? dataHistory.image : "/null"}`}
            fill={true}
            sizes="100vw"
          />
        </div>
        <div className={styles["content-bbs"]}>
          {dataHistory ? (
            <>
              <h1>{dataHistory.judulnya}</h1>
              <div dangerouslySetInnerHTML={{ __html: dataHistory.isinya }} />
            </>
          ) : (
            <Loading />
          )}
        </div>
      </>
    </section>
  );
}

export default HistorySection;
