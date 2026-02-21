import { Component } from "react";
import Container from "../../../Container";
import styles from "./bottomheader.module.css";
import clsx from "clsx";
import Hero from "./BottomHeaderComponents/Hero";

export default class BottomHeader extends Component {
  render() {
    return (
      <section className={clsx(styles.heroSection)}>
        <Container className={clsx(styles.heroSectionContent)}>
          <Hero />
          <img
            src="/src/img/sponsor.png"
            alt="sponsor"
            className={clsx(styles.sponsors)}
          />
        </Container>
      </section>
    );
  }
}
