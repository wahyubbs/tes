"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { usePathname } from "next/navigation";

import styles from "@/styles/header/header.module.scss";
import { MenuLink } from "./MenuLink";
import { HeaderMenuType } from "../../models/HeaderMenuType";
import { useContextProvider } from "@/context/ContextProvider";
import Link from "next/link";

interface IMenu {
  name: string;
  url: string;
  menuName: HeaderMenuType;
}

const menus: IMenu[] = [
  { name: "HOME", menuName: HeaderMenuType.BERANDA, url: "/" },
  {
    name: "ETHOS DAILY",
    menuName: HeaderMenuType.ETHOS_DAILY,
    url: "/ethosdaily",
  },
  {
    name: "ABOUT US",
    menuName: HeaderMenuType.TENTANG_KAMI,
    url: "/tentangkami",
  },
  { name: "PRODUCTS", menuName: HeaderMenuType.PRODUK, url: "/produk" },
  { name: "CAREER", menuName: HeaderMenuType.KARIR, url: "/karir" },
  {
    name: "PARTNERSHIP",
    menuName: HeaderMenuType.PARTNERSHIP,
    url: "/partnership",
  },
];

function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { menuActive, setMenuActive } = useContextProvider();
  const pathname = usePathname();
  const logoImg = "/img/logo.png";
  const logoWhiteImg = "/img/logo2.png";

  function checkPath() {
    if (pathname.includes("/ethosdaily/")) {
      setMenuActive(HeaderMenuType.ETHOS_DAILY);
    } else if (pathname.includes("/ethosdaily")) {
      setMenuActive(HeaderMenuType.ETHOS_DAILY);
    } else if (pathname.includes("/produk")) {
      setMenuActive(HeaderMenuType.PRODUK);
    } else if (pathname.includes("/produk/")) {
      setMenuActive(HeaderMenuType.PRODUK);
    } else if (pathname.includes("/tentangkami")) {
      setMenuActive(HeaderMenuType.TENTANG_KAMI);
    } else if (pathname.includes("/karir")) {
      setMenuActive(HeaderMenuType.KARIR);
    } else if (pathname.includes("/partnership")) {
      setMenuActive(HeaderMenuType.PARTNERSHIP);
    } else setMenuActive(HeaderMenuType.BERANDA);
  }

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    checkPath();
  }, [pathname]);

  return (
    <nav
      className={`${styles["container-bbs"]} ${
        isSticky ? styles["sticky-container-bbs"] : null
      }`}
    >
      <div className={styles["header-container-bbs"]}>
        <Link href={"/"} className={styles["logo-bbs"]}>
          <Image alt="search" src={logoWhiteImg} width={121} height={56} />
        </Link>
        <Link href={"/"} className={styles["logo-sticky-bbs"]}>
          <Image alt="search" src={logoImg} width={121} height={56} />
        </Link>
        <div className={styles["menu-container-bbs"]}>
          {menus.map((menu, index) => (
            <MenuLink
              setHamburgerActive={setHamburgerActive}
              key={index}
              name={menu.name}
              url={menu.url}
              menuName={menu.menuName}
            />
          ))}
        </div>

        <GiHamburgerMenu
          onClick={(e) => {
            e.preventDefault();
            setHamburgerActive(true);
          }}
          className={styles["hamburger-bbs"]}
        />
      </div>

      {/* menu mobile */}
      <>
        {hamburgerActive && (
          <div
            onClick={() => {
              setHamburgerActive(false);
            }}
            className={styles["overlay-bbs"]}
          />
        )}
        <div
          className={`${styles["mobile-menu-container-bbs"]} ${
            hamburgerActive ? styles["mobile-menu-container-active-bbs"] : null
          }`}
        >
          <AiOutlineCloseCircle
            onClick={() => {
              setHamburgerActive(false);
            }}
            className={styles["close-btn-bbs"]}
          />
          <div
            className={`${styles["menuList-container-bbs"]} ${
              hamburgerActive ? styles["menuList-container-active-bbs"] : null
            }`}
          >
            {menus.map((menu, index) => (
              <MenuLink
                setHamburgerActive={setHamburgerActive}
                key={index}
                name={menu.name}
                url={menu.url}
                menuName={menu.menuName}
              />
            ))}
          </div>
        </div>
      </>
    </nav>
  );
}

export default Header;
