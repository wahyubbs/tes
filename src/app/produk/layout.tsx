import HeaderMenu from "@/components/header/HeaderMenu";
import Search from "@/components/sideContent/Search";
import Type from "@/components/sideContent/Type";
import PopularProducts from "@/components/sideContent/popularProducts/PopularProducts";
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
      <HeaderMenu title="PRODUCTS" imageURL={"produk"} path="Produk" />
      <div className={styles["content-container-bbs"]}>
        <div className={`${styles["side-content-bbs"]} `}>
          {/* <Type useChecklist={true} title="Kategori" dataDropdown={category} /> */}
          <Search type="product" />
          <div className={`${styles["destop-bbs"]}`}>
            <PopularProducts />
          </div>
        </div>
        <div className={styles["content-bbs"]}>{children}</div>
        <div
          className={`${styles["side-content-bbs"]} ${styles["mobile-bbs"]}`}
        >
          {/* <Type useChecklist={true} title="Kategori" dataDropdown={category} /> */}
          <PopularProducts />
        </div>
      </div>
    </section>
  );
}
