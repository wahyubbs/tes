"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import styles from "@/styles/sliders/sliderBanner.module.scss";
import Navigation from "./Navigation";
import { handleOnError } from "../utils/handleImageError";

function SliderBanner({ dataSlider }: { dataSlider: any[] }) {
  const slider = useRef<any>();
  const route = useRouter();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: styles["status-container-bbs"],
  };

  const slideLeft = () => {
    slider.current.slickPrev();
  };

  const slideRight = () => {
    slider.current.slickNext();
  };

  return (
    <>
      <Slider ref={slider} {...sliderSettings}>
        {dataSlider?.map((data: any, index: number) => (
          <div className={styles["slide-bbs"]} key={index}>
            <Image
              alt="image"
              fill={true}
              loading="eager"
              sizes="100vw"
              src={`${
                process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                  : process.env.NEXT_PUBLIC_URL_IMG
              }${data.image}`}
              onError={handleOnError}
            />
            <div className={styles["slide-content-blur-bbs"]} />
            <div
              onClick={(e) => {
                e.preventDefault();
                route.push(`ethosdaily/${btoa(data.slugnya)}`);
              }}
              className={styles["slide-content-container-bbs"]}
            >
              <p className={styles["tag-bbs"]}>Herbal</p>
              <h1 className={styles["title-bbs"]}>
                {dataSlider[index].fDeskripsi}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
      <Navigation
        isDisplayInMobile={false}
        prevFunction={slideLeft}
        nextFunction={slideRight}
      />
    </>
  );
}

export default SliderBanner;
