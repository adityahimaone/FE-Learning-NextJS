import React from "react";
import Header from "../components/Header/navbar";
import Footer from "../components/Footer/footer";
import styles from "./Mainlayout.module.css";

export default function mainLayout(props) {
  const { children } = props;
  return (
    <div className={`container mx-auto ${styles.container}`}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
