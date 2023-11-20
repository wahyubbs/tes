"use client";
import { createContext, useContext, useState } from "react";
import { HeaderMenuType } from "@/models/HeaderMenuType";

const context = createContext<any>({
  isLogin: false,
  menuActive: HeaderMenuType.BERANDA,
  searchProduct: "",
  searchNews: "",
  setIsLogin: () => {},
  setMenuActive: () => {},
  setSearchProduct: () => {},
  setSearchNews: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuActive, setMenuActive] = useState(HeaderMenuType.BERANDA);
  const [isLogin, setIsLogin] = useState(false);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [searchNews, setSearchNews] = useState<string>("");
  return (
    <context.Provider
      value={{
        menuActive,
        isLogin,
        searchProduct,
        searchNews,
        setSearchNews,
        setSearchProduct,
        setIsLogin,
        setMenuActive,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useContextProvider = () => useContext(context);
