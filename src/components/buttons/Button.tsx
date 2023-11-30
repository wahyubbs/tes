"use client";
import { useRouter } from "next/navigation";

import styles from "@/styles/buttons/button.module.scss";
import { useContextProvider } from "@/context/ContextProvider";
import { HeaderMenuType } from "@/models/HeaderMenuType";
import { ButtonType } from "../../models/ButtonType";

function Button({
  menuName,
  url,
  title,
  style,
  variant,
}: {
  menuName: HeaderMenuType;
  url: string;
  title: string;
  style: {};
  variant: ButtonType;
}) {
  const { menuActive, setMenuActive } = useContextProvider();

  const route = useRouter();
  return (
    <button
      style={style}
      onClick={(e) => {
        e.preventDefault();
        setMenuActive(menuName);
        route.push(url);
      }}
      className={`${styles["btn-bbs"]} ${
        styles[
          variant === ButtonType.GREEN
            ? "green-btn-bbs"
            : variant === ButtonType.WHITE
            ? "white-btn-bbs"
            : "white-btn-hovered-bbs"
        ]
      }`}
    >
      {title}
    </button>
  );
}

export default Button;
