import { Metadata } from "next";

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
      {children}
    </section>
  );
}
