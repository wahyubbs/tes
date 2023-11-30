import styles from "@/styles/home/productSection/productSection.module.scss";
import { HeaderMenuType } from "@/models/HeaderMenuType";
import dynamic from "next/dynamic";

const SliderProducts = dynamic(
  () => import("@/components/sliders/SliderProducts"),
  {
    ssr: false,
  }
);
import Button from "@/components/buttons/Button";
import { ButtonType } from "@/models/ButtonType";
import Loading from "@/components/utils/Loading";

function ProductSection({ dataProducts }: { dataProducts: any[] }) {
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
            <Button
              style={{
                width: "fit-content",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "1em",
                lineHeight: "1em",
                letterSpacing: "0.003em",
              }}
              variant={ButtonType.WHITEHOVERED}
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
