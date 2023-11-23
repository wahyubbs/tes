import { Metadata } from "next";

import styles from "@/styles/products/index.module.scss";
import ProductsPagination from "@/components/products/ProductsPagination";
import HeaderMenu from "@/components/header/HeaderMenu";
import Search from "@/components/sideContent/Search";
import PopularProducts from "@/components/sideContent/popularProducts/PopularProducts";

export const metadata: Metadata = {
  title: "produk ethos world",
  keywords: [
    "produk PT Ethos Kreatif Indonesia",
    "produk ethos",
    "produk ethos world",
    "produk Ethos World",
    "produk PT Ethos",
  ],
  description: " all produk PT Ethos Kreatif Indonesia ",
};

function Products() {
  return (
    <>
      <HeaderMenu title="PRODUCTS" imageURL={"produk"} path="Produk" />
      <div className={styles["content-container-bbs"]}>
        <div className={`${styles["side-content-bbs"]} `}>
          {/* <Type useChecklist={true} title="Kategori" dataDropdown={category} /> */}
          <Search type="product" />
          <div className={`${styles["destop-bbs"]}`}>
            <PopularProducts />
          </div>
        </div>
        <div className={styles["content-bbs"]}>
          <div className={styles["products-container-bbs"]}>
            <ProductsPagination limit={8} />
          </div>
        </div>
        <div
          className={`${styles["side-content-bbs"]} ${styles["mobile-bbs"]}`}
        >
          {/* <Type useChecklist={true} title="Kategori" dataDropdown={category} /> */}
          <PopularProducts />
        </div>
      </div>
    </>
  );
}

export default Products;
