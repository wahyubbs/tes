import { Metadata } from "next";

import styles from "@/styles/career/index.module.scss";
import HeaderMenu from "@/components/header/HeaderMenu";
import CareersPagination from "@/components/career/CareerPagination";

export const metadata: Metadata = {
  title: "karir ethos world",
  keywords: [
    "karir PT Ethos Kreatif Indonesia",
    "karir ethos",
    "karir ethos world",
    "karir Ethos World",
    "karir PT Ethos",
    "karir PT Etos Kreatif Indonesia",
    "karir PT Ethos",
    "karir PT Ethos Kreatif Indonesia",
    "karir pt etos kreatif indonesia",
    " karir ethos team",
    "loker cilacap",
  ],
  description: " all karir PT Ethos Kreatif Indonesia ",
};

async function Career() {
  return (
    <div className={styles["career-container-bbs"]}>
      <HeaderMenu title="CAREER" imageURL="karir" path="Karir" />
      <div className={styles["career-content-container-bbs"]}>
        <div className={styles["title-container-bbs"]}>
          <h1 className={styles["title-bbs"]}>
            Temukan <span>Pekerjaan Impian</span> Anda Bersama
            <span> Ethos!</span>
          </h1>
          {/* <div className={styles["search-box-bbs"]}>
            <AiOutlineSearch />
            <input placeholder="Cari ..." />
          </div> */}
        </div>
        <CareersPagination limit={12} />
      </div>
    </div>
  );
}

export default Career;
