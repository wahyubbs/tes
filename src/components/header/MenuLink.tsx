"use client";
import Link from "next/link";

import styles from "@/styles/header/menuLink.module.scss";
import { HeaderMenuType } from "../../models/HeaderMenuType";
import { useContextProvider } from "@/context/ContextProvider";

export function MenuLink({
  name,
  url,
  menuName,
  setHamburgerActive,
}: {
  name: string;
  url: string;

  menuName: HeaderMenuType;
  setHamburgerActive: (isActive: boolean) => void;
}) {
  const { menuActive, setMenuActive } = useContextProvider();
  return (
    <Link
      onClick={() => {
        setMenuActive(menuName);
        setHamburgerActive(false);
      }}
      className={`${menuActive == menuName ? styles["menu-active-bbs"] : ""}`}
      href={url}
    >
      {name}
    </Link>
  );
}
