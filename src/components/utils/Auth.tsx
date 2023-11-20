"use client";
import { useRouter } from "next/navigation";
import { LuLoader } from "react-icons/lu";
import { useEffect } from "react";

import styles from "@/styles/auth/auth.module.scss";
import { useContextProvider } from "@/context/ContextProvider";

function Auth() {
  const route = useRouter();

  const { isLogin, setIsLogin } = useContextProvider();

  useEffect(() => {
    if (localStorage.getItem("secret-code") !== null) setIsLogin(true);
    else route.push("/login");
  }, []);

  return (
    <div className={!isLogin ? styles["overlay-bbs"] : styles["inactive-bbs"]}>
      <LuLoader />
    </div>
  );
}

export default Auth;
