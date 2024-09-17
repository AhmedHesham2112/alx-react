import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: "white",
    padding: "20px",
    color: "#e0354b",
    display: "flex",
  },
  headerTitle: {
    marginTop: "85px",
    marginLeft: "15px",
  },
  appLogo: {
    width: "200px",
    height: "auto",
    marginRight: "10px",
  },
});

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 className={css(styles.headerTitle)}>School dashboard</h1>
    </header>
  );
}

export default Header;
