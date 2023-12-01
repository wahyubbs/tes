import styles from "@/styles/news/index.module.scss";
import NewsPagination from "@/components/ethosDaily/NewsPagination";
import HeaderMenu from "@/components/header/HeaderMenu";
import FollowUs from "@/components/sideContent/FollowUs";
import NewsLetter from "@/components/sideContent/NewsLetter";
import Search from "@/components/sideContent/Search";
import PopularNews from "@/components/sideContent/popularNews/PopularNews";

export default function AllNews() {
  return (
    <>
      <HeaderMenu title="ETHOS DAILY" imageURL={"Daily"} path="Ethos Daily" />
      <div className={styles["content-bbs"]}>
        <div className={styles["side-content-mobile-bbs"]}>
          <Search type="news" />

          {/* <Type useChecklist={false} title="Kategori" dataDropdown={category} /> */}
        </div>
        <div className={styles["news-container-bbs"]}>
          <NewsPagination limit={8} />
        </div>

        <div className={styles["side-content-bbs"]}>
          <Search type="news" />
          {/* <Type useChecklist={false} title="Kategori" dataDropdown={category} /> */}
          <PopularNews />
          {/* <Tags /> */}
          <NewsLetter />
          <FollowUs />
        </div>
        <div className={styles["side-content-mobile-bbs"]}>
          <PopularNews />
          {/* <Tags /> */}
          <NewsLetter />
          <FollowUs />
        </div>
      </div>
    </>
  );
}
