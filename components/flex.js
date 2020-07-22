import React from "react";
import styles from "./layout.module.scss";

export default function Flex({ children }) {
  return <div className={styles.flex}>{children}</div>;
}
