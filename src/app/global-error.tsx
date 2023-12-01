"use client";

import Image from "next/image";
import styles from "@/styles/error/error.module.scss";
import Button from "@/components/buttons/Button";
import { ButtonType } from "@/models/ButtonType";
import { HeaderMenuType } from "@/models/HeaderMenuType";

function Index() {
  return (
    <div className={styles["container-bbs"]}>
      <Image
        className="img-bbs"
        src="/img/404.png"
        width={600}
        height={300}
        alt="logo"
      />
      <div className={styles["content-bbs"]}>
        <h1>Page not found!</h1>
        <p>
          {`We're sorry, the page you requested could no be found.`}
          <br /> Please go back to the previous page.
        </p>
        <Button
          style={{
            marginTop: "0.5rem",
            width: "fit-content",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "16px",
            letterSpacing: "0.003em",
          }}
          variant={ButtonType.GREEN}
          url={``}
          title="Go Back"
          menuName={HeaderMenuType.BERANDA}
        />
      </div>
    </div>
  );
}

export default Index;
