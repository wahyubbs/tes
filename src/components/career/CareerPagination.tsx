"use client";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import styles from "@/styles/career/careerPagination.module.scss";

import getCareerInfo from "@/app/api/getCareerInfo";
import CardCareer from "../cards/CardCareer";
import Loading from "../utils/Loading";

function CareersPagination({ limit }: { limit: number }) {
  const [dataCareers, setDataCareers] = useState<any>();
  const [isFetching, setIsFetching] = useState(true);

  const getData = async (page: number, limit: number) => {
    setIsFetching(true);
    if (dataCareers) {
      let oldData = dataCareers;
      oldData.data = null;
      setDataCareers(oldData);
    }
    const data = await getCareerInfo(page.toString(), limit.toString(), "");
    if (data) {
      setDataCareers(data);
    }
    setIsFetching(false);
    window.scrollTo(0, 0);
  };

  const handlePageClick = (data: any) => {
    const currentPage = data.selected + 1;
    getData(currentPage, limit);
  };

  useEffect(() => {
    getData(1, limit);
  }, []);

  return (
    <>
      {dataCareers && dataCareers.data ? (
        <div className={styles["careers-bbs"]}>
          {dataCareers.data.map((data: any, index: number) => (
            <CardCareer
              imgUrl={data.imagenya}
              linkURL={data.keterangan}
              key={index}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}

      {dataCareers && (
        <ReactPaginate
          className={styles["pagination-bbs"]}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={dataCareers.totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          activeClassName={styles["active-page-bbs"]}
        />
      )}
    </>
  );
}

export default CareersPagination;
