import styles from "@/styles/sideContent/populerNews/popularNews.module.scss";
import getPopularNews from "@/app/api/getPopularNews";
import { PopularNewsContent } from "./PopularNewsContent";

export const dynamic = "force-dynamic";

export default async function PopularNews() {
  const dataPopularNews = await getPopularNews();

  return (
    <div className={styles["container-bbs"]}>
      <h1 className={styles["title-bbs"]}>Berita Populer</h1>
      {dataPopularNews?.map((data: any, index: number) => (
        <PopularNewsContent
          key={index}
          slug={data.slugnya}
          imgURL={data.image}
          title={data.judulnya}
          status=""
          date={data.tgl}
        />
      ))}
    </div>
  );
}
