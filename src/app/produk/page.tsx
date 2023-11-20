import { Metadata } from "next";

import styles from "@/styles/products/index.module.scss";
import ProductsPagination from "@/components/products/ProductsPagination";

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
    <div className={styles["products-container-bbs"]}>
      <ProductsPagination limit={8} />
    </div>
  );
}

export default Products;
