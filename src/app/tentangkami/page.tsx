import styles from "@/styles/aboutUs/index.module.scss";
import { getAboutUs, getHistory } from "../api/getAboutUs";
import HeaderMenu from "@/components/header/HeaderMenu";

import HistorySection from "@/components/aboutUs/HistorySection";

export async function generateMetadata() {
  const dataAbout = await getAboutUs();
  return {
    title: `tentang ethos world`,
    keywords: dataAbout ? dataAbout[0].isinya : "",
    description: dataAbout ? dataAbout[0].isinya : "",
  };
}

export default async function AboutUs() {
  const dataHistory = await getHistory();

  return (
    <div className={styles["container-bbs"]}>
      <HeaderMenu
        title="ABOUT US"
        imageURL={"tentangKami"}
        path="Tentang Kami"
      />
      <HistorySection dataHistory={dataHistory ? dataHistory[0] : null} />
    </div>
  );
}
