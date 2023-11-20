import Dinamic from "next/dynamic";

const Slider = Dinamic(() => import("../../sliders/SliderBanner"));
const Video = Dinamic(() => import("./VideoBanner"));
import styles from "@/styles/home/homeSection/homeSection.module.scss";
import { getSlider } from "@/app/api/getSlider";
import Loading from "@/components/utils/Loading";

async function HomeSection() {
  const dataSlider = await getSlider();

  return (
    <section id="beranda" className={styles["container-bbs"]}>
      {dataSlider ? (
        dataSlider[0].fSlide == "1" ? (
          <Slider dataSlider={dataSlider} />
        ) : (
          <Video dataVideo={dataSlider} />
        )
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default HomeSection;
