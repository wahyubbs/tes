import Image from "next/image";

import styles from "@/styles/header/headerMenu.module.scss";
import getHeaderMenu from "@/app/api/getHeaderMenu";

async function HeaderMenu({
  imageURL,
  title,
  path,
}: {
  imageURL: string;
  title: string;
  path: string;
}) {
  const bgImage = await getHeaderMenu(imageURL);
  return (
    <>
      <div className={styles["container-bbs"]}>
        <div className={styles["background-bbs"]}>
          {bgImage && (
            <Image
              alt={"headermenu"}
              src={`${
                process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  : process.env.NEXT_PUBLIC_URL_IMG
              }${bgImage[0].imagenya}`}
              fill={true}
              sizes="100vw"
            />
          )}
        </div>
      </div>
      <div className={styles["title-bbs"]}>
        <h1>{title}</h1>
        <p>{/* Beranda<span>{` > ${path}`}</span> */}</p>
      </div>
    </>
  );
}

export default HeaderMenu;
