import { Component } from "react";
import styles from "./questions.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default class Questions extends Component {
  state = {
    openIndex: null,
  };

  toggle = (index) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? null : index,
    }));
  };

  render() {
    const { openIndex } = this.state;

    return (
      <section className={clsx(styles.questions)}>
        <Container
          className={clsx(styles.questionsContent)}
          dataAnimate="fadeInUp"
        >
          <h5 className={clsx(styles.questionsContentSubTitle)}>
            FREQUENT QUESTION
          </h5>
          <h2 className={clsx(styles.questionsContentTitle)}>
            Do you have any question
          </h2>

          <div className={clsx(styles.faqs)}>
            <div className={clsx(styles.faqItem)}>
              <button
                onClick={() => this.toggle(0)}
                className={styles.faqButton}
              >
                {openIndex === 0 ? (
                  <div className={clsx(styles.bgIcon)}>
                    <FaMinus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                ) : (
                  <div className={clsx(styles.bgIcon)}>
                    <FaPlus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                )}
                How to contact with riders emergency?
              </button>
              <p
                className={clsx(
                  styles.faqAnswer,
                  openIndex === 0 && styles.show
                )}
              >
                You can contact riders via the emergency hotline in the app.
              </p>
            </div>
            <div className={clsx(styles.faqItem)}>
              <button
                onClick={() => this.toggle(1)}
                className={styles.faqButton}
              >
                {openIndex === 1 ? (
                  <div className={clsx(styles.bgIcon)}>
                    <FaMinus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                ) : (
                  <div className={clsx(styles.bgIcon)}>
                    <FaPlus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                )}
                App installation failed, how to update system information?
              </button>
              <p
                className={clsx(
                  styles.faqAnswer,
                  openIndex === 1 && styles.show
                )}
              >
                Please reinstall the app or update your OS to the latest
                version.
              </p>
            </div>
            <div className={clsx(styles.faqItem)}>
              <button
                onClick={() => this.toggle(2)}
                className={styles.faqButton}
              >
                {openIndex === 2 ? (
                  <div className={clsx(styles.bgIcon)}>
                    <FaMinus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                ) : (
                  <div className={clsx(styles.bgIcon)}>
                    <FaPlus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                )}
                Website response taking time, how to improve?
              </button>
              <p
                className={clsx(
                  styles.faqAnswer,
                  openIndex === 2 && styles.show
                )}
              >
                Get your blood tests delivered at home, collect a sample from
                management news...
              </p>
            </div>
            <div className={clsx(styles.faqItem)}>
              <button
                onClick={() => this.toggle(3)}
                className={styles.faqButton}
              >
                {openIndex === 3 ? (
                  <div className={clsx(styles.bgIcon)}>
                    <FaMinus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                ) : (
                  <div className={clsx(styles.bgIcon)}>
                    <FaPlus
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                )}
                New update fixed all bug and issues
              </button>
              <p
                className={clsx(
                  styles.faqAnswer,
                  openIndex === 3 && styles.show
                )}
              >
                Yes, the latest update resolved all known bugs and performance
                issues.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
