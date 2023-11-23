import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

import styles from "@/styles/header/headerMenu.module.scss";
import getHeaderMenu from "@/app/api/getHeaderMenu";
import Link from "next/link";

const rootMenu = [
  { value: "ethosdaily", label: "ETHOS DAILY" },
  { value: "tentangkami", label: "ABOUT US" },
  { value: "produk", label: "PRODUCTS" },
  {
    value: "karir",
    label: "CAREER",
  },
  { value: "partnership", label: "PARTNERSHIP" },
];
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
  const paths = path.split("/");
  return (
    <>
      <div className={styles["container-bbs"]}>
        <div className={styles["background-bbs"]}>
          {bgImage && (
            <Image
              priority={true}
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
        <div className={styles["root-menu-bbs"]}>
          <Link href="/">HOME</Link>

          {paths.map((item, index) => (
            <div className={styles["root-menu-bbs"]} key={index}>
              <IoIosArrowForward />
              <Link
                className={styles["subroot-menu-bbs"]}
                href={` ${
                  index === 0
                    ? paths.length > 1
                      ? `/${item.replaceAll(" ", "").toLocaleLowerCase()}`
                      : item.replaceAll(" ", "").toLocaleLowerCase()
                    : btoa(item.replaceAll(" ", "").toLocaleLowerCase())
                }`}
              >
                {rootMenu.find(
                  (el) =>
                    el.value === item.replaceAll(" ", "").toLocaleLowerCase()
                )?.label !== undefined
                  ? rootMenu.find(
                      (el) =>
                        el.value ===
                        item.replaceAll(" ", "").toLocaleLowerCase()
                    )?.label
                  : item.replaceAll("-", " ").toLocaleLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeaderMenu;
