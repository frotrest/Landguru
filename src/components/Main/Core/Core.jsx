import { Component } from "react";
import styles from "./core.module.css";
import clsx from "clsx";
import Container from "../../Container";
import pictures from '@/assets/img/pictures.png';

export default class Core extends Component {
  render() {
    return (
      <section className={clsx(styles.core)}>
        <Container className={clsx(styles.coreContent)} dataAnimate="fadeInRight">
          <div className={clsx(styles.coreText)}>
            <h5 className={clsx(styles.coreTextPodTitle)}>Core features</h5>
            <h2 className={clsx(styles.coreTextTitle)}>
              Smart Jackpots that you may love this anytime & anywhere
            </h2>
            <p className={clsx(styles.coreTextItem)}>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>
            <button className={clsx(styles.coreTextBtn)}>Get Started</button>
          </div>
          <img
            src={pictures}
            alt="pictures"
            className={clsx(styles.coreContentImg)}
          />
        </Container>
      </section>
    );
  }
}
