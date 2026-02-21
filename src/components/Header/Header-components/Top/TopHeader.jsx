import { Component } from "react";
import Container from "../../../Container";
import Logo from "./TopHeaderComponents/Logo";
import NavBar from "./TopHeaderComponents/NavBar";
import styles from "./topheader.module.css";
import clsx from "clsx";

export default class TopHeader extends Component {
  render() {
    return (
      <section className={clsx(styles.headerSection)}>
        <Container className={clsx(styles.headerSectionContent)}>
          <Logo />
          <NavBar />
          <button className={clsx(styles.headerSectionContentBtn)}>
            Get Started
          </button>
        </Container>
      </section>
    );
  }
}
