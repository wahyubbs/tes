import React from "react";

import styles from "@/styles/loading.module.scss";

function Loading() {
  return (
    <div className={styles["container-bbs"]}>
      <div className={styles["loading-bbs"]} id="loading" />
    </div>
  );
}

export default Loading;
