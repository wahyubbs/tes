import dynamic from "next/dynamic";

import styles from "@/styles/home/homePage.module.scss";
import HomeSection from "@/components/home/homeSection/HomeSection";
import NewsSection from "@/components/home/newsSection/NewsSection";
const AboutSection = dynamic(
  () => import("@/components/home/aboutSection/AboutSection"),
  {
    ssr: true,
  }
);
const ProductSection = dynamic(
  () => import("@/components/home/productSection/ProductSection"),
  {
    ssr: true,
  }
);
const MitraSection = dynamic(
  () => import("@/components/home/mitraSection/MitraSection"),
  {
    ssr: true,
  }
);
import { getSlider } from "./api/getSlider";
import { getAboutUs } from "./api/getAboutUs";
import getNews from "./api/getNews";
import getPopularProducts from "./api/getPopularProducts";
import { getMitra } from "./api/getMitra";

export const revalidate = 5;

export default async function LandingPage() {
  const dataSlider = await getSlider();
  const dataAbout = await getAboutUs();
  const dataNews = await getNews();
  const dataProducts = await getPopularProducts();
  const dataMitra = await getMitra();

  return (
    <>
      <main className={styles["container-bbs"]}>
        <HomeSection dataSlider={dataSlider} />
        <NewsSection dataNews={dataNews} />
        <AboutSection dataAbout={dataAbout} />
        <ProductSection dataProducts={dataProducts} />
        <MitraSection dataMitra={dataMitra} />
      </main>
    </>
  );
}
