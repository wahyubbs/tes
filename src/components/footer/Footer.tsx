import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/footer/footer.module.scss";
import Copyright from "./Copyright";
import getSocialMedia from "@/app/api/getSocialMedia";
import FormJoinPartnership from "../home/mitraSection/FormJoinPartnership";
import joinPartnership from "@/app/api/joinPartnership";
import { ethosPostApi } from "@/app/api/ethosAPI";

async function Footer() {
  const logoImg = "/img/logo2.png";
  const teleponImg = "/img/icon/socialMedia/telepon.png";
  const emailImg = "/img/icon/socialMedia/email.png";
  const instagramImg = "/img/icon/socialMedia/instagram.png";
  const tiktokImg = "/img/icon/socialMedia/tiktok.png";
  const linkedinImg = "/img/icon/socialMedia/linkedin.png";

  const dataSocialMedia = await getSocialMedia().then((resp) =>
    resp ? resp[0] : null
  );

  return (
    <>
      <section id="footer" className={styles["container-fluid-bbs"]}>
        <div className={styles["superGraphic-wrapper-bbs"]} />
        <div className={styles["container-bbs"]}>
          <div className={styles["logo-container-bbs"]}>
            <Image
              className={styles["logo-bbs"]}
              alt="logo"
              src={logoImg}
              width={195}
              height={90}
            />
          </div>
          <div className={styles["info-container-bbs"]}>
            <div className={styles["address-container-bbs"]}>
              <h1>Let’s Connect With Us</h1>
              <h2>PT Etos Kreatif Indonesia</h2>
              <p>
                Jl. Kinibalu, Rawasrengseng, Sidanegara, Kec. Cilacap Tengah,
                Kab Cilacap, Jateng
              </p>
            </div>

            <div className={styles["contact-container-bbs"]}>
              <div>
                <Image width={34} height={34} src={teleponImg} alt="kontak" />
                <p>{dataSocialMedia?.kontak}</p>
              </div>
              <div>
                <Image width={34} height={34} src={emailImg} alt="email" />
                <p>{dataSocialMedia?.email}</p>
              </div>
            </div>
          </div>
          <div className={styles["page-container-bbs"]}>
            <h1>Who We Are</h1>
            <Link href="/ethosdaily">Ethos Daily</Link>
            <Link href="/tentangkami">About Us</Link>
            <Link href="/produk">Products</Link>
            <Link href="/karir">Career</Link>
            <Link href="/partnership">Partnership</Link>
          </div>
          <div className={styles["subscribe-container-bbs"]}>
            <h1>Subscribe Newsletter</h1>
            <FormJoinPartnership />
            <h1>Follow Our Social Media</h1>
            <div className={styles["social-media-container-bbs"]}>
              <a href={dataSocialMedia?.ig} target="_blank" rel="noreferrer">
                <Image
                  width={34}
                  height={34}
                  src={instagramImg}
                  alt="instagram"
                />
              </a>

              <a
                href={dataSocialMedia?.linkedin}
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
        </div>
      </section>
      <Copyright />
    </>
  );
}

export default Footer;
