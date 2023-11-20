import styles from "@/styles/news/index.module.scss";
import NewsPagination from "@/components/ethosDaily/NewsPagination";

export default function AllNews() {
  return (
    <div className={styles["news-container-bbs"]}>
      <NewsPagination limit={8} />
    </div>
  );
}
