import SeeAllButton from "@/components/buttons/SeeAllButton";
import CardNews from "@/components/cards/CardNews";
import { HeaderMenuType } from "@/models/HeaderMenuType";
import styles from "@/styles/news/otherNews.module.scss";

function OtherNews({ dataNewsByCat }: { dataNewsByCat: any[] }) {
  return (
    <div className={styles["other-news-container-bbs"]}>
      <h1 className={styles["title-bbs"]}>Berita Terkait</h1>
      <div className={styles["other-news-bbs"]}>
        {dataNewsByCat?.map((data: any, index: number) => (
          <CardNews
            priority={true}
            key={index}
            status=""
            description={data.isicard}
            date={data.tgl}
            title={data.judulnya}
            slug={data.slugnya}
            category={data.kategorinya}
            imgUrl={data.image}
          />
        ))}
      </div>
      <SeeAllButton
        url="/ethosdaily"
        title="Lihat Semua Berita"
        menuName={HeaderMenuType.ETHOS_DAILY}
      />
    </div>
  );
}

export default OtherNews;
