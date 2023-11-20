"use client";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import styles from "@/styles/news/newsPagination.module.scss";
import CardNews from "@/components/cards/CardNews";
import getAllNews from "@/app/api/getAllNews";
import { useContextProvider } from "@/context/ContextProvider";
import Loading from "../utils/Loading";

function NewsPagination({ limit }: { limit: number }) {
  const [dataNews, setDataNews] = useState<any>();
  const [isFetching, setIsFetching] = useState(true);
  const { searchNews } = useContextProvider();

  const getData = async (page: number, limit: number) => {
    setIsFetching(true);
    if (dataNews) {
      let oldData = dataNews;
      oldData.data = null;
      setDataNews(oldData);
    }

    const data = await getAllNews(
      page.toString(),
      limit.toString(),
      searchNews
    );
    if (data) {
      setIsFetching(false);
      setDataNews(data);
    }
    window.scrollTo(0, 0);
  };

  const handlePageClick = (data: any) => {
    const currentPage = data.selected + 1;
    getData(currentPage, limit);
  };

  useEffect(() => {
    getData(1, limit);
  }, [searchNews]);

  return (
    <>
      {dataNews && dataNews.data ? (
        <div className={styles["news-bbs"]}>
          {dataNews.data.map((data: any, index: number) => (
            <CardNews
              key={index}
              slug={data.slugnya}
              status=""
              date={data.tgl}
              description={data.isicard}
              category={data.kategorinya}
              imgUrl={data.image}
              title={data.judulnya}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      {dataNews && (
        <ReactPaginate
          className={styles["pagination-bbs"]}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={dataNews.totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          activeClassName={styles["active-page-bbs"]}
        />
      )}
    </>
  );
}

export default NewsPagination;
