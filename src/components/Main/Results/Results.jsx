import { Component } from "react";
import styles from "./results.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaChessKing } from "react-icons/fa";

export default class Results extends Component {
  render() {
    return (
      <section className={clsx(styles.results)}>
        <Container className={clsx(styles.resultsContent)}>
          <img
            src="/src/img/results.png"
            alt="results"
            className={clsx(styles.resultsContentImg)}
          />
          <div className={clsx(styles.resultsContentText)}>
            <h5 className={clsx(styles.resultsContentTextPodTitle)}>
              Core features
            </h5>
            <h2 className={clsx(styles.resultsContentTextTitle)}>
              Smart Jackpots that you may love this anytime & anywhere
            </h2>
            <div className={clsx(styles.resultsAdvantages)}>
              <div className={clsx(styles.resultsAdvantage)}>
                <div className={clsx(styles.bgAdvantagePicture)}>
                  <BsFillBagCheckFill size={25} />
                </div>
                <div className={clsx(styles.bgAdvantageText)}>
                  <h5 className={clsx(styles.bgAdvantageTextTitle)}>
                    Smart Features
                  </h5>
                  <p className={clsx(styles.bgAdvantageTextItem)}>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managments. Your blood tests.
                  </p>
                </div>
              </div>
              <div className={clsx(styles.resultsAdvantage)}>
                <div className={clsx(styles.bgAdvantagePicture)}>
                  <FaChessKing size={25} />
                </div>
                <div className={clsx(styles.bgAdvantageText)}>
                  <h5 className={clsx(styles.bgAdvantageTextTitle)}>
                    Secure Contents
                  </h5>
                  <p className={clsx(styles.bgAdvantageTextItem)}>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managments. Your blood tests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
