import { Component } from "react";
import styles from "./payment.module.css";
import clsx from "clsx";
import Container from "../../Container";
import payment from '@/assets/img/payment.png';

export default class Payment extends Component {
  render() {
    return (
      <section className={clsx(styles.payment)}>
        <Container className={clsx(styles.paymentContent)}>
          <img
            src={payment}
            alt="payment"
            className={clsx(styles.paymentImg)}
          />
          <div className={clsx(styles.paymentText)}>
            <h5 className={clsx(styles.paymentTextPodTitle)}>Core features</h5>
            <h2 className={clsx(styles.paymentTextTitle)}>
              Secure Payment Transaction System with #1 Ranking
            </h2>
            <p className={clsx(styles.paymentTextItem)}>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>
            <button className={clsx(styles.paymentTextBtn)}>Learn More</button>
          </div>
        </Container>
      </section>
    );
  }
}
