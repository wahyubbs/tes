"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

import styles from "@/styles/sideContent/filter.module.scss";
import { useContextProvider } from "@/context/ContextProvider";

export default function Filter({ type }: { type: string }) {
  const { searchProduct, setSearchProduct } = useContextProvider();
  const { searchNews, setSearchNews } = useContextProvider();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (type === "product") setSearch(searchProduct);
    else setSearch(searchNews);
  }, []);

  return (
    <div className={styles["filter-container-bbs"]}>
      <form
        className={styles["search-box-bbs"]}
        onSubmit={(e) => {
          e.preventDefault();
          if (type === "product") setSearchProduct(search);
          else setSearchNews(search);
        }}
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

      {/* <form className={styles["dropdown-container-bbs"]}>
        <label>Tampilkan</label>
        <select name="limit" id="limit">
          <option value="10">10</option>
          <option value="5">5</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </form>

      <form className={styles["dropdown-container-bbs"]}>
        <label>Urutkan</label>
        <select name="limit" id="limit">
          <option value="Populer">Populer</option>
          <option value="Terbaru">Terbaru</option>
        </select>
      </form> */}
    </div>
  );
}
