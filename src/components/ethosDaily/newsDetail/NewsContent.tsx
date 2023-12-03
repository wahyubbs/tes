"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/news/content.module.scss";
import { HeaderMenuType } from "@/models/HeaderMenuType";
import { useContextProvider } from "@/context/ContextProvider";
import OtherNews from "./OtherNews";
import { handleOnError } from "@/components/utils/handleImageError";
import Loading from "@/components/utils/Loading";

function NewsContent({
  dataNewsById,
  dataNewsByCat,
  tags,
}: {
  dataNewsById: any[];
  dataNewsByCat: any[];
  tags: any[];
}) {
  const route = useRouter();
  const { menuActive, setMenuActive } = useContextProvider();
  const instagramImg = "/img/icon/socialMedia/instagram.png";
  const tiktokImg = "/img/icon/socialMedia/tiktok.png";
  const linkedinImg = "/img/icon/socialMedia/linkedin.png";
  const facebookImg = "/img/icon/socialMedia/facebook.png";
  const twitterImg = "/img/icon/socialMedia/twitter.png";

  return (
    <div className={styles["container-bbs"]}>
      {dataNewsById ? (
        <>
          <div className={styles["image-news-bbs"]}>
            <Image
              alt="news"
              unoptimized
              src={`${
                process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  : process.env.NEXT_PUBLIC_URL_IMG
              }${dataNewsById[0].image}`}
              fill={true}
              sizes="100vw"
              onError={handleOnError}
            />
          </div>
          <div className={styles["date-container-bbs"]}>
            <p>{dataNewsById[0].kategori}</p>
            <p>{dataNewsById[0].tgl}</p>
          </div>
          <p>Penulis : {dataNewsById[0].penulisnya}</p>
          <h1 className={styles["title-bbs"]}>{dataNewsById[0].judulnya}</h1>
          <div
            className={styles["description-bbs"]}
            dangerouslySetInnerHTML={{ __html: dataNewsById[0].isinya }}
          ></div>

          {/* <div className={styles["tag-container-bbs"]}>
            <div className={styles["row-bbs"]}>
              <h3>Tags : </h3>
              {tags?.map((tag: any, index: number) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <div className={styles["row-bbs"]}>
              <h3>Bagikan : </h3>
              <Image
                width={28}
                height={28}
                src={instagramImg}
                alt="instagram"
              />
              <Image width={28} height={28} src={facebookImg} alt="facebook" />
              <Image width={28} height={28} src={tiktokImg} alt="tiktok" />
              <Image width={28} height={28} src={twitterImg} alt="twitter" />
              <Image width={28} height={28} src={linkedinImg} alt="linkedin" />
            </div>
          </div> */}
          {/* <div className={styles["navigation-container-bbs"]}>
            <div
              onClick={(e) => {
                e.preventDefault();
                setMenuActive(HeaderMenuType.ETHOS_DAILY);
                route.push("/ethosdaily");
              }}
            >
              <p>Berita Sebelumnya</p>
              <h1>Judul dari Berita Sebelumnya</h1>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                setMenuActive(HeaderMenuType.ETHOS_DAILY);
                route.push("/ethosdaily");
              }}
            >
              <p>Berita Selanjutnya</p>
              <h1>Judul dari Berita Selanjutnya</h1>
            </div>
          </div> */}
          <OtherNews dataNewsByCat={dataNewsByCat} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default NewsContent;
