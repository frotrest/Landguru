import { Component } from "react";
import styles from "./products.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaTimesCircle } from "react-icons/fa";

export default class Products extends Component {
  render() {
    return (
      <section className={clsx(styles.products)}>
        <Container className={clsx(styles.productsContent)}>
          <h5 className={clsx(styles.productsContentPodTitle)}>
            Whats the function
          </h5>
          <h2 className={clsx(styles.productsContentTitle)}>
            Let’s see how it works
          </h2>
          <div className={clsx(styles.plans)}>
            <div className={clsx(styles.planFree)}>
              <h3 className={styles.planFreeTitle}>Free Plan</h3>
              <p className={styles.planFreeSubTitle}>
                For Small teams or office
              </p>
              <ul className={styles.planFreeFeatures}>
                <li className={styles.planFreeFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planFreeFeatureTextItem}>
                    Ultimate access to all course, exercises and assessments
                  </p>
                </li>
                <li className={styles.planFreeFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planFreeFeatureTextItem}>
                    Free access for all kind of exercise corrections with
                    downloads.
                  </p>
                </li>
                <li className={styles.planFreeFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planFreeFeatureTextItem}>
                    Total assessment corrections with free download access
                    system
                  </p>
                </li>
                <li className={styles.planFreeFeature}>
                  <FaTimesCircle
                    size={20}
                    style={{ opacity: 0.3, color: "gray" }}
                  />
                  <p className={styles.planFreeFeatureTextItem}>
                    Unlimited download of courses on the mobile app contents
                  </p>
                </li>
                <li className={styles.planFreeFeature}>
                  <FaTimesCircle
                    size={20}
                    style={{ opacity: 0.3, color: "gray" }}
                  />
                  <p className={styles.planFreeFeatureTextItem}>
                    Download and print courses and exercises in PDF
                  </p>
                </li>
              </ul>
              <button className={styles.planFreeBtn}>Signup Now</button>
            </div>
            <div className={clsx(styles.planPremium)}>
              <div className={clsx(styles.firstCol)}>
                <div className={clsx(styles.descriptionPlan)}>
                  <span className={styles.descriptionPlanRecommendation}>
                    Recommended
                  </span>
                  <h3 className={styles.descriptionPlanTitle}>Premium</h3>
                  <p className={styles.descriptionPlanItem}>
                    For startup enterprise
                  </p>
                </div>
                <div className={clsx(styles.pricePlan)}>
                  <h5 className={styles.pricePlanTitle}>Starting from</h5>
                  <h2 className={styles.pricePlanSubTitle}>49.99/mo</h2>
                </div>
              </div>
              <ul className={styles.planPremiumFeatures}>
                <li className={styles.planPremiumFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planPremiumFeatureTextItem}>
                    Ultimate access to all course, exercises and assessments
                  </p>
                </li>
                <li className={styles.planPremiumFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planPremiumFeatureTextItem}>
                    Free access for all kind of exercise corrections with
                    downloads.
                  </p>
                </li>
                <li className={styles.planPremiumFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planPremiumFeatureTextItem}>
                    Total assessment corrections with free download access
                    system
                  </p>
                </li>
                <li className={styles.planPremiumFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planPremiumFeatureTextItem}>
                    Unlimited download of courses on the mobile app contents
                  </p>
                </li>
                <li className={styles.planPremiumFeature}>
                  <IoIosCheckmarkCircle
                    size={20}
                    color="rgba(63, 219, 177, 1)"
                  />
                  <p className={styles.planPremiumFeatureTextItem}>
                    Download and print courses and exercises in PDF
                  </p>
                </li>
              </ul>
              <button className={styles.planPremiumBtn}>Signup Now</button>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
