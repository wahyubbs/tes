"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "@/styles/sideContent/search.module.scss";
import { useContextProvider } from "@/context/ContextProvider";

function Search({ type }: { type: string }) {
  const route = useRouter();
  const { searchNews, setSearchNews } = useContextProvider();
  const { searchProduct, setSearchProduct } = useContextProvider();

  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const handleSubmitSearch = () => {
    if (pathname.includes("/ethosdaily/")) route.push(`/ethosdaily`);
    else if (pathname.includes("/produk/")) route.push(`/produk`);

    if (type === "product") setSearchProduct(search);
    else setSearchNews(search);
  };
  useEffect(() => {
    if (type === "product") setSearch(searchProduct);
    else setSearch(searchNews);
  }, []);

  return (
    <div className={styles["search-container-bbs"]}>
      <h1>Pencarian</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault(), handleSubmitSearch();
        }}
        className={styles["search-box-bbs"]}
      >
        <AiOutlineSearch />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Cari ..."
        />
      </form>
    </div>
  );
}

export default Search;
