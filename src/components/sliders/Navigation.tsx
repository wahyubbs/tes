import Image from "next/image";

import styles from "@/styles/sliders/navigation.module.scss";

function Navigation({
  nextFunction,
  prevFunction,
  isDisplayInMobile,
}: {
  isDisplayInMobile: boolean;
  nextFunction: Function;
  prevFunction: Function;
}) {
  const prevArrowImg = "/img/icon/prevArrow.svg";
  const nextArrowImg = "/img/icon/nextArrow.svg";

  return (
    <>
      <Image
        className={`${styles["left-arrow"]}  ${
          isDisplayInMobile ? "" : styles["inactive-bbs"]
        }`}
        onClick={(e) => {
          e.preventDefault();
          prevFunction();
        }}
        alt="prevArrow"
        src={prevArrowImg}
        width={45}
        height={153}
      />
      <Image
        className={`${styles["right-arrow"]}  ${
          isDisplayInMobile ? "" : styles["inactive-bbs"]
        }`}
        onClick={(e) => {
          e.preventDefault();
          nextFunction();
        }}
        alt="nextArrow"
        src={nextArrowImg}
        width={45}
        height={153}
      />
    </>
  );
}

export default Navigation;
