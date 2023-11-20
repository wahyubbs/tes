import { Metadata } from "next";

import HeaderMenu from "@/components/header/HeaderMenu";
import FollowUs from "@/components/sideContent/FollowUs";
import NewsLetter from "@/components/sideContent/NewsLetter";
import Search from "@/components/sideContent/Search";
import Tags from "@/components/sideContent/Tags";
import Type from "@/components/sideContent/Type";
import PopularNews from "@/components/sideContent/popularNews/PopularNews";
import styles from "@/styles/news/layout.module.scss";
import Filter from "@/components/sideContent/Filter";

const category = [
  {
    type: "terbaru",
    data: [
      { type: "Jamu Tradisional" },
      { type: "Obat Herbal" },
      { type: "Suplemen & Vitamin" },
    ],
  },
  { type: "wawasan" },
];

export const metadata: Metadata = {
  title: "ethos daily",
  keywords: [
    "berita PT Ethos Kreatif Indonesia",
    "berita ethos",
    "berita ethos world",
    "berita Ethos World",
    "berita PT Ethos",
  ],
  description: " berita PT Ethos Kreatif Indonesia ",
};
export default function EthosDailyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="ethosDaily" className={styles["container-bbs"]}>
      <HeaderMenu title="ETHOS DAILY" imageURL={"Daily"} path="Ethos Daily" />
      <div className={styles["content-bbs"]}>
        <div className={styles["side-content-mobile-bbs"]}>
          <Search type="news" />
          {/* <Type useChecklist={false} title="Kategori" dataDropdown={category} /> */}
        </div>
        {children}
        <div className={styles["side-content-bbs"]}>
          <Search type="news" />
          {/* <Type useChecklist={false} title="Kategori" dataDropdown={category} /> */}
          <PopularNews />
          {/* <Tags /> */}
          <NewsLetter />
          <FollowUs />
        </div>
        <div className={styles["side-content-mobile-bbs"]}>
          <PopularNews />
          {/* <Tags /> */}
          <NewsLetter />
          <FollowUs />
        </div>
      </div>
    </section>
  );
}
