import { Component } from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import Container from "../Container";

export default class Footer extends Component {
  render() {
    return (
      <footer className={clsx(styles.footer)}>
        <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
          <div className={clsx(styles.category)}>
            <h5 className={clsx(styles.categoryTitle)}>About Us</h5>
            <ul className={clsx(styles.categoryList)}>
              <li className={clsx(styles.categoryListItem)}>Support Center</li>
              <li className={clsx(styles.categoryListItem)}>
                Customer Support
              </li>
              <li className={clsx(styles.categoryListItem)}>About Us</li>
              <li className={clsx(styles.categoryListItem)}>Copyright</li>
              <li className={clsx(styles.categoryListItem)}>
                Popular Campaign
              </li>
            </ul>
          </div>
          <div className={clsx(styles.category)}>
            <h5 className={clsx(styles.categoryTitle)}>Our Information</h5>
            <ul className={clsx(styles.categoryList)}>
              <li className={clsx(styles.categoryListItem)}>Return Policy </li>
              <li className={clsx(styles.categoryListItem)}>Privacy Policy</li>
              <li className={clsx(styles.categoryListItem)}>
                Terms & Conditions
              </li>
              <li className={clsx(styles.categoryListItem)}>Site Map</li>
              <li className={clsx(styles.categoryListItem)}>Store Hours</li>
            </ul>
          </div>
          <div className={clsx(styles.category)}>
            <h5 className={clsx(styles.categoryTitle)}>My Account</h5>
            <ul className={clsx(styles.categoryList)}>
              <li className={clsx(styles.categoryListItem)}>Press inquiries</li>
              <li className={clsx(styles.categoryListItem)}>Social media </li>
              <li className={clsx(styles.categoryListItem)}>directories</li>
              <li className={clsx(styles.categoryListItem)}>Images & B-roll</li>
              <li className={clsx(styles.categoryListItem)}>Permissions</li>
            </ul>
          </div>
          <div className={clsx(styles.category)}>
            <h5 className={clsx(styles.categoryTitle)}>Policy</h5>
            <ul className={clsx(styles.categoryList)}>
              <li className={clsx(styles.categoryListItem)}>
                Application security
              </li>
              <li className={clsx(styles.categoryListItem)}>
                Software principles
              </li>
              <li className={clsx(styles.categoryListItem)}>
                Unwanted software policy
              </li>
              <li className={clsx(styles.categoryListItem)}>
                Responsible supply chain
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    );
  }
}
