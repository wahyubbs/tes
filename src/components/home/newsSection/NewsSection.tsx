import Dynamic from "next/dynamic";

import styles from "@/styles/home/newsSection/newsSection.module.scss";
const CardNews = Dynamic(() => import("../../cards/CardNews"));
const SeeOtherButton = Dynamic(() => import("../../buttons/SeeAllButton"));
import getNews from "@/app/api/getNews";
import { HeaderMenuType } from "@/models/HeaderMenuType";
import Loading from "@/components/utils/Loading";

async function NewsSection() {
  const dataNews = await getNews();

  return (
    <section id="berita" className={styles["container-bbs"]}>
      <div className={styles["menu-container-bbs"]}>
        <div></div>
        <h1 className={styles["title-bbs"]}>ETHOS DAILY</h1>
        <div className={styles["web-btn-bbs"]}>
          <SeeOtherButton
            menuName={HeaderMenuType.ETHOS_DAILY}
            url={"/ethosdaily"}
            title="Lihat Semua Berita"
          />
        </div>
      </div>
      {dataNews ? (
        <div className={styles["cards-container-bbs"]}>
          {dataNews.map((data: any, index: number) => (
            <CardNews
              key={index}
              slug={data.slugnya}
              category={data.kategorinya}
              imgUrl={data.image}
              date={data.tgl}
              status=""
              title={data.judulnya}
              description={data.isicard}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      <div className={styles["mobile-btn-bbs"]}>
        <SeeOtherButton
          menuName={HeaderMenuType.ETHOS_DAILY}
          url={"/ethosdaily"}
          title="Lihat Semua Berita"
        />
      </div>
    </section>
  );
}

export default NewsSection;
