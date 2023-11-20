"use client";
import { useRouter } from "next/navigation";

import styles from "@/styles/buttons/moreButton.module.scss";

function MoreButton({ url }: { url: string }) {
  const route = useRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        route.push(url);
      }}
      className={styles["btn-bbs"]}
    >
      Selengkapnya
    </button>
  );
}

export default MoreButton;
