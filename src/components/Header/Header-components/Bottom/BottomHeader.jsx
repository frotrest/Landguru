import { Component } from "react";
import Container from "../../../Container";
import styles from "./bottomheader.module.css";
import clsx from "clsx";
import Hero from "./BottomHeaderComponents/Hero";
import sponsor from '@/assets/img/sponsor.png';

export default class BottomHeader extends Component {
  render() {
    return (
      <section className={clsx(styles.heroSection)}>
        <Container className={clsx(styles.heroSectionContent)}>
          <Hero />
          <img
            src={sponsor}
            alt="sponsor"
            className={clsx(styles.sponsors)}
            data-animate="fadeInUp"
          />
        </Container>
      </section>
    );
  }
}
