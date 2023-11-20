import styles from "@/styles/home/homePage.module.scss";
import AboutSection from "@/components/home/aboutSection/AboutSection";
import HomeSection from "@/components/home/homeSection/HomeSection";
import NewsSection from "@/components/home/newsSection/NewsSection";
import ProductSection from "@/components/home/productSection/ProductSection";
import MitraSection from "@/components/home/mitraSection/MitraSection";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
  return (
    <>
      <main className={styles["container-bbs"]}>
        <HomeSection />
        <NewsSection />
        <AboutSection />
        <ProductSection />
        <MitraSection />
      </main>
    </>
  );
}
