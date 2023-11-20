import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/sideContent/followUs.module.scss";
import getSocialMedia from "@/app/api/getSocialMedia";

export default async function FollowUs() {
  const instagramImg = "/img/icon/socialMedia/instagram.png";
  const tiktokImg = "/img/icon/socialMedia/tiktok.png";
  const linkedinImg = "/img/icon/socialMedia/linkedin.png";
  const facebookImg = "/img/icon/socialMedia/facebook.png";
  const twitterImg = "/img/icon/socialMedia/twitter.png";

  const dataSocialMedia = await getSocialMedia().then((resp) =>
    resp ? resp[0] : null
  );
  return (
    <div className={styles["container-bbs"]}>
      <h1>Ikuti Kami</h1>
      <div className={styles["social-media-bbs"]}>
        <Link href={dataSocialMedia ? dataSocialMedia.ig : "#"}>
          <Image width={34} height={34} src={instagramImg} alt="instagram" />
        </Link>

        {/* <Image width={34} height={34} src={facebookImg} alt="facebook" />
        <Image width={34} height={34} src={tiktokImg} alt="tiktok" />
        <Image width={34} height={34} src={twitterImg} alt="twitter" /> */}
        <Link href={dataSocialMedia ? dataSocialMedia.linkedin : "#"}>
          <Image width={34} height={34} src={linkedinImg} alt="linkedin" />
        </Link>
      </div>
    </div>
  );
}
