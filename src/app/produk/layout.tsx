import styles from "@/styles/products/layout.module.scss";

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

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="news" className={styles["container-bbs"]}>
      {children}
    </section>
  );
}
