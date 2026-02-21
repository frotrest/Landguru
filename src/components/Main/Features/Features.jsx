import { Component } from "react";
import styles from "./features.module.css";
import clsx from "clsx";
import FeaturesCards from "./FeaturesCards";
import Container from "../../Container";

export default class Features extends Component {
  render() {
    return (
      <section className={clsx(styles.features)}>
        <Container className={clsx(styles.featuresContent)}>
          <h5 className={clsx(styles.featuresContentPodTitle)}>
            Quality features
          </h5>
          <h2 className={clsx(styles.featuresContentTitle)}>
            Meet exciting feature of app
          </h2>
          <FeaturesCards />
        </Container>
      </section>
    );
  }
}
