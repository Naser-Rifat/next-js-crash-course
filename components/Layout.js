import styles from "../styles/Layout.module.css";
import React from "react";
import Nav from "./Nav";
import { Header } from "./Header";
import SignUp from "../pages/signup";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header></Header>

        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
