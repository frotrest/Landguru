import { Component } from "react";
import styles from "./tutorial.module.css";
import clsx from "clsx";
import Container from "../../Container";

const stages = [
  {
    step: 1,
    title: "Set disbursement Instructions",
    id: 1,
  },
  {
    step: 2,
    title: "Assembly retrieves funds from your account",
    id: 2,
  },
  {
    step: 3,
    title: "Assembly initiates disbursement",
    id: 3,
  },
  {
    step: 4,
    title: "Customer receives funds payment",
    id: 4,
  },
];

export default class Tutorial extends Component {
  render() {
    return (
      <section className={clsx(styles.tutorial)}>
        <Container className={clsx(styles.tutorialContent)} dataAnimate="fadeInLeft">
          <h5 className={clsx(styles.tutorialContentPodTitle)}>
            Whats the function
          </h5>
          <h2 className={clsx(styles.tutorialContentTitle)}>
            Let’s see how it works
          </h2>
          <div className={clsx(styles.stages)}>
            {stages.map((item) => (
              <div key={item.id} className={clsx(styles.stage)}>
                <span className={clsx(styles.stageStep)}>{item.step}</span>
                <h3 className={clsx(styles.stageTitle)}>{item.title}</h3>
                <p className={clsx(styles.stageItem)}>
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
}
