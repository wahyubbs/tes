import styles from "@/styles/home/mitraSection/mitraSection.module.scss";
import SliderMitra from "@/components/sliders/SliderMitra";
import Loading from "@/components/utils/Loading";

function MitraSection({ dataMitra }: { dataMitra: any[] }) {
  return (
    <section id="mitra" className={styles["container-bbs"]}>
      <div className={styles["mitra-container-bbs"]}>
        <div className={styles["title-bbs"]}>OUR PARTNERS</div>
        <div className={styles["slider-container-bbs"]}>
          {dataMitra ? <SliderMitra dataMitra={dataMitra} /> : <Loading />}
        </div>
      </div>
    </section>
  );
}

export default MitraSection;
