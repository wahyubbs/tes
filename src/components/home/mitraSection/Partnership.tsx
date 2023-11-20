import Image from "next/image";

import styles from "@/styles/home/mitraSection/partnership.module.scss";
import FormJoinPartnership from "./FormJoinPartnership";
import getSocialMedia from "@/app/api/getSocialMedia";

async function Partnership() {
  const instagramImg = "/img/icon/socialMedia/instagram.png";
  const tiktokImg = "/img/icon/socialMedia/tiktok.png";
  const linkedinImg = "/img/icon/socialMedia/linkedin.png";
  const facebookImg = "/img/icon/socialMedia/facebook.png";
  const twitterImg = "/img/icon/socialMedia/twitter.png";
  const teleponImg = "/img/icon/socialMedia/telepon.png";
  const emailImg = "/img/icon/socialMedia/email.png";

  const dataSocialMedia = await getSocialMedia().then((resp) => resp[0]);

  return (
    <div className={styles["partnership-container-bbs"]}>
      <div className={styles["overlay-bbs"]}>
        <div></div>
        <div></div>
      </div>
      <div className={styles["partnership-bbs"]}>
        <div className={styles["left-partnership-container-bbs"]}>
          <h1 className={styles["title-bbs"]}>
            Tertarik Menjadi Partner Bersama Ethos?
          </h1>
          <p className={styles["description-bbs"]}>
            Waktu terbaik adalah sekarang! segera daftar dan bersiap <br></br>
            untuk meningkatkan dan mengembangkan bisnis anda.
          </p>
        </div>
        <div className={styles["right-partnership-container-bbs"]}>
          <div className={styles["social-media-container-bbs"]}>
            <h1>Ikuti Media Sosial Kami</h1>
            <div className={styles["social-media-bbs"]}>
              <a href={dataSocialMedia.ig} target="_blank" rel="noreferrer">
                <Image
                  width={34}
                  height={34}
                  src={instagramImg}
                  alt="instagram"
                />
              </a>

              <a
                href={dataSocialMedia.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={34}
                  height={34}
                  src={linkedinImg}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          <div className={styles["contact-container-bbs"]}>
            <h1>Kontak Kami</h1>
            <div className={styles["contacts-bbs"]}>
              <div className={styles["telepon-bbs"]}>
                <Image width={34} height={34} src={teleponImg} alt="telepon" />
                <p>{dataSocialMedia.kontak}</p>
              </div>
              <div className={styles["email-bbs"]}>
                <Image width={34} height={34} src={emailImg} alt="email" />
                <p>{dataSocialMedia.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
