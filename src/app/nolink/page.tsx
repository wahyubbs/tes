import styles from "@/styles/nolink/nolink.module.scss";
import Image from "next/image";

async function Index() {
  return (
    <div className={styles["container-bbs"]}>
      <Image src="/img/logo.png" width={200} height={100} alt="logo" />
      <p>This page could not be found.</p>
    </div>
  );
}

export default Index;
