import styles from "@/styles/home/productSection/productSection.module.scss";
import { HeaderMenuType } from "@/models/HeaderMenuType";
import SliderProducts from "@/components/sliders/SliderProducts";
import SeeAllButton from "@/components/buttons/SeeAllButton";
import Loading from "@/components/utils/Loading";
import getPopularProducts from "@/app/api/getPopularProducts";

async function ProductSection() {
  const dataProducts = await getPopularProducts();

  return (
    <section id="produk" className={styles["container-bbs"]}>
      <div className={styles["products-bbs"]}>
        <h1 className={styles["title-bbs"]}>OUR PRODUCTS</h1>
        {dataProducts ? (
          <div className={styles["slider-container"]}>
            <SliderProducts dataProduct={dataProducts} />
          </div>
        ) : (
          <Loading />
        )}

        {dataProducts && (
          <div className={styles["seeall-btn-bbs"]}>
            <SeeAllButton
              url="/produk"
              title="Lihat Semua Produk"
              menuName={HeaderMenuType.PRODUK}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
