"use client";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import styles from "@/styles/products/productsPagination.module.scss";
import CardProduct from "@/components/cards/CardProduct";
import getAllProducts from "@/app/api/getAllProducts";
import { useContextProvider } from "@/context/ContextProvider";
import Loading from "../utils/Loading";

function ProductsPagination({ limit }: { limit: number }) {
  const [dataProducts, setDataProducts] = useState<any>();
  const [isFetching, setIsFetching] = useState(true);
  const { searchProduct, setSearchProduct } = useContextProvider();

  const getData = async (page: number, limit: number) => {
    setIsFetching(true);
    if (dataProducts) {
      let oldData = dataProducts;
      oldData.data = null;
      setDataProducts(oldData);
    }
    const data = await getAllProducts(
      page.toString(),
      limit.toString(),
      searchProduct
    );
    if (data) setDataProducts(data);
    setIsFetching(false);
    window.scrollTo(0, 0);
  };

  const handlePageClick = (data: any) => {
    const currentPage = data.selected + 1;
    getData(currentPage, limit);
  };
  useEffect(() => {
    getData(1, limit);
  }, [searchProduct]);

  return (
    <>
      {dataProducts && dataProducts.data ? (
        <div className={styles["products-bbs"]}>
          {dataProducts.data.map((data: any, index: number) => (
            <CardProduct
              isResponsive={true}
              key={index}
              isActive={true}
              imgUrl={data.image}
              slug={data.slugnya}
              title={data.judulnya}
              description={data.isiproduk}
              category={data.jenisnya}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      {dataProducts && (
        <ReactPaginate
          className={styles["pagination-bbs"]}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={dataProducts.totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          activeClassName={styles["active-page-bbs"]}
        />
      )}
    </>
  );
}

export default ProductsPagination;
