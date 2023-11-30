"use client";

import Slider from "react-slick";
import { useRef } from "react";

import CardProduct from "../cards/CardProduct";
import Navigation from "./Navigation";
import styles from "@/styles/sliders/sliderProducts.module.scss";

function SliderProducts({ dataProduct }: { dataProduct: any[] }) {
  const validDataProduct =
    dataProduct.length === 3 ? dataProduct.concat(dataProduct) : dataProduct;
  const slider = useRef<any>();
  const settings = {
    className: styles["sliders-bbs"],

    centerMode: true,
    infinite: dataProduct.length >= 3 ? true : false,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideLeft = () => {
    slider.current.slickPrev();
  };

  const slideRight = () => {
    slider.current.slickNext();
  };

  return (
    <>
      <Slider ref={slider} {...settings}>
        {validDataProduct?.map((data, index) => (
          <CardProduct
            priority={false}
            isResponsive={false}
            category={data.kategori}
            isActive={false}
            imgUrl={data.image}
            key={index}
            description={data.isiproduk}
            title={data.judulnya}
            slug={data.slugnya}
          />
        ))}
      </Slider>
      <Navigation
        isDisplayInMobile={true}
        prevFunction={slideLeft}
        nextFunction={slideRight}
      />
    </>
  );
}

export default SliderProducts;
