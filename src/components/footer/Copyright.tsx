"use client";

import Image from "next/image";

import styles from "@/styles/footer/copyright.module.scss";

function Copyright() {
  const upArrowImg = "/img/icon/topArrow.png";
  const scrollToUpHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles["container-bbs"]}>
      <div className={styles["content-bbs"]}>
        <p>All Rights Reserved | 2023 © PT Etos Kreatif Indonesia</p>
        {/* <div onClick={scrollToUpHandler} className={styles["row-bbs"]}>
          <Image width={20} height={20} src={upArrowImg} alt="arrowUp" />
          <p>Back To Top</p>
        </div> */}
      </div>
    </div>
  );
}

export default Copyright;
