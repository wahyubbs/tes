"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

import { handleOnError } from "../utils/handleImageError";
import styles from "@/styles/sliders/sliderMitra.module.scss";
import Navigation from "./Navigation";
import Link from "next/link";

function SliderMitra({ dataMitra }: { dataMitra: any[] }) {
  const validDatMitra =
    dataMitra.length === 5 ? dataMitra.concat(dataMitra) : dataMitra;
  const slider = useRef<any>();

  const settings = {
    className: styles["sliders-bbs"],
    centerMode: true,
    infinite: dataMitra.length >= 5 ? true : false,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
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
        {validDatMitra?.map((data: any, index: number) =>
          data.keterangan ? (
            <a
              className={styles["img-bbs"]}
              key={index}
              href={`https://${data.keterangan}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority={true}
                onError={handleOnError}
                src={`${
                  process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                    ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                    : process.env.NEXT_PUBLIC_URL_IMG
                }${data.imagenya}`}
                fill={true}
                sizes="100vw"
                alt="partnership"
              />
            </a>
          ) : (
            <Link className={styles["img-bbs"]} key={index} href="/nolink">
              <Image
                onError={handleOnError}
                src={data.image}
                fill={true}
                priority={true}
                sizes="100vw"
                alt="partnership"
              />
            </Link>
          )
        )}
      </Slider>

      <Navigation
        isDisplayInMobile={false}
        nextFunction={slideRight}
        prevFunction={slideLeft}
      />
    </>
  );
}

export default SliderMitra;
