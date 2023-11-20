import Image from "next/image";

import styles from "@/styles/home/aboutSection/aboutSection.module.scss";
import { HeaderMenuType } from "../../../models/HeaderMenuType";
import SeeAllButton from "@/components/buttons/SeeAllButton";
import Loading from "@/components/utils/Loading";

function AboutSection({ dataAbout }: { dataAbout: any[] }) {
  return (
    <section id="tentangKami" className={styles["container-bbs"]}>
      <div className={styles["content-bbs"]}>
        <div className={styles["content-left-bbs"]}>
          <Image
            alt="about"
            fill={true}
            sizes="100vw"
            src={`${
              process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
                : process.env.NEXT_PUBLIC_URL_IMG
            }${dataAbout ? dataAbout[0].image : "no.svg"}`}
          />
        </div>
        <div className={styles["content-right-bbs"]}>
          <div>
            <h1 className={styles["tag-bbs"]}>ABOUT US</h1>
            {dataAbout ? (
              <>
                <h2 className={styles["title-bbs"]}>{dataAbout[0].judulnya}</h2>
                <div
                  className={styles["description-bbs"]}
                  dangerouslySetInnerHTML={{ __html: dataAbout[0].isinya }}
                />
              </>
            ) : (
              <Loading />
            )}
          </div>

          <div className={styles["seeother-btn-bbs"]}>
            <SeeAllButton
              url="/tentangkami"
              title="Selengkapnya"
              menuName={HeaderMenuType.TENTANG_KAMI}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
