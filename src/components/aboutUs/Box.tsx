import styles from "@/styles/aboutUs/box.module.scss";

export function Box({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles["box-bbs"]}>
      <h1>{title}</h1>
      <div
        className={styles["description-bbs"]}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
