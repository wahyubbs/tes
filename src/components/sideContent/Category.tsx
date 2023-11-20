import { IoIosArrowForward } from "react-icons/io";

import styles from "@/styles/sideContent/category.module.scss";

function DropdownMenu() {
  return (
    <div className={styles["dropdown-bbs"]}>
      <div className={styles["row-bbs"]}>
        <IoIosArrowForward />
        <h2>Kategori</h2>
      </div>
      <h2>(5)</h2>
    </div>
  );
}

function Category() {
  return (
    <div className={styles["category-container-bbs"]}>
      <h1>Kategori</h1>
      <DropdownMenu />
      <DropdownMenu />
      <DropdownMenu />
    </div>
  );
}

export default Category;
