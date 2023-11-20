"use client";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import styles from "@/styles/sideContent/type.module.scss";

function SecondaryDropdown({
  dataDropdown,
  useChecklist,
}: {
  dataDropdown: any;
  useChecklist: boolean;
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles["secondary-dropdown-container-bbs"]}>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsActive(!isActive);
        }}
        className={styles["secondary-dropdown-bbs"]}
      >
        {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {useChecklist && (
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        )}
        <p>{dataDropdown.type}</p>
      </div>
    </div>
  );
}

function PrimaryDropdown({
  dataDropdown,
  useChecklist,
}: {
  dataDropdown: any;
  useChecklist: boolean;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles["primary-dropdown-container-bbs"]}>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsActive(!isActive);
        }}
        className={styles["primary-dropdown-bbs"]}
      >
        {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {useChecklist && (
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        )}

        <p>{dataDropdown.type}</p>
      </div>
      {dataDropdown.data &&
        isActive &&
        dataDropdown.data.map((data: any, index: number) => (
          <SecondaryDropdown
            useChecklist={useChecklist}
            key={index}
            dataDropdown={data}
          />
        ))}
    </div>
  );
}

function Type({
  title,
  dataDropdown,
  useChecklist,
}: {
  title: string;
  dataDropdown: any;
  useChecklist: boolean;
}) {
  return (
    <div className={styles["type-container-bbs"]}>
      <h1>{title}</h1>
      {dataDropdown.map((type: any, index: number) => (
        <PrimaryDropdown
          useChecklist={useChecklist}
          key={index}
          dataDropdown={type}
        />
      ))}
    </div>
  );
}

export default Type;
