import styles from "@/styles/sideContent/popularProduct/popularProduct.module.scss";
import { PopularProductContent } from "./PopularProductContent";
import getPopularProducts from "@/app/api/getPopularProducts";

export const dynamic = "force-dynamic";

export default async function PopularProducts() {
  const data = await getPopularProducts();
  return (
    <div className={styles["container-bbs"]}>
      <h1 className={styles["title-bbs"]}>Produk Populer</h1>
      {data?.map((data: any, index: number) => (
        <PopularProductContent
          key={index}
          slug={data.slugnya}
          imgURL={data.image}
          title={data.judulnya}
          tgl={data.tgl}
        />
      ))}
    </div>
  );
}
