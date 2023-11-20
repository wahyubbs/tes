import getTags from "@/app/api/getTags";
import styles from "@/styles/sideContent/tags.module.scss";

function Tag({ tag }: { tag: string }) {
  return (
    <div className={styles["tag-bbs"]}>
      <p>{tag}</p>
    </div>
  );
}

export default async function Tags() {
  const dataTags = await getTags();

  return (
    <div className={styles["container-bbs"]}>
      <h1>Tags</h1>
      <div className={styles["tags-bbs"]}>
        {dataTags?.map((data: any, index: number) => (
          <Tag key={index} tag={data.tagsnya} />
        ))}
      </div>
    </div>
  );
}
