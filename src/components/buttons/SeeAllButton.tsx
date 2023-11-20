"use client";
import { useRouter } from "next/navigation";

import styles from "@/styles/buttons/seeAllButton.module.scss";
import { useContextProvider } from "@/context/ContextProvider";
import { HeaderMenuType } from "@/models/HeaderMenuType";

function SeeAllButton({
  menuName,
  url,
  title,
}: {
  menuName: HeaderMenuType;
  url: string;
  title: string;
}) {
  const { menuActive, setMenuActive } = useContextProvider();

  const route = useRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setMenuActive(menuName);
        route.push(url);
      }}
      className={styles["btn-bbs"]}
    >
      {title}
    </button>
  );
}

export default SeeAllButton;
