import { Metadata } from "next";

import styles from "@/styles/partnership/index.module.scss";
import HeaderMenu from "@/components/header/HeaderMenu";
import Partners from "@/components/partnership/Partners";

export const metadata: Metadata = {
  title: "partnership ethos world",
  keywords: [
    "partnership PT Ethos Kreatif Indonesia",
    "partnership PT Etos Kreatif Indonesia",
    "partnership pt ethos kreatif indonesia",
    "partnership pt ethos kreatif indonesia",
    "partnership ethos",
    "partnership ethos world",
    "partnership Ethos World",
    "partnership PT Ethos",
    "mitra ethos",
    "Mitra Ethos",
  ],
  description: " partnership PT Ethos Kreatif Indonesia ",
};

async function Partnership() {
  return (
    <div className={styles["container-bbs"]}>
      <HeaderMenu
        title="PARTNERSHIP"
        imageURL="pathnersip"
        path="Partnership"
      />
      <div className={styles["mitra-bbs"]}>
        <Partners />
      </div>
    </div>
  );
}

export default Partnership;
