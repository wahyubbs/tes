"use client";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "@/styles/home/homeSection/videoBanner.module.scss";

function VideoBanner({ dataVideo }: { dataVideo: any[] }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  return (
    <>
      <div className={styles["container-bbs"]}>
        {dataVideo && (
          <video autoPlay={true} muted={true} loop id="myVideo-bbs">
            <source src={dataVideo[0].fFile} type="video/webm" />
          </video>
        )}

        <div className={styles["video-content-black-bbs"]} />
        <div className={styles["video-content-container-bbs"]}>
          <div className={styles["video-content-bbs"]}>
            <div className={styles["banner-content-bbs"]}></div>
          </div>
        </div>
      </div>

      {/* iframe video */}
      {isPlayingVideo && (
        <div className={styles["iframe-container-bbs"]}>
          <AiOutlineCloseCircle
            onClick={(e) => {
              e.preventDefault();
              setIsPlayingVideo(false);
            }}
            className={styles["close-btn-bbs"]}
          />
          <iframe src={dataVideo[0].fFile} className={styles["iframe-bbs"]} />
        </div>
      )}
    </>
  );
}

export default VideoBanner;
