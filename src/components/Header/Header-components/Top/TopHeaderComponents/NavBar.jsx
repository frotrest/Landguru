import { Component } from "react";
import styles from "../topheader.module.css";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";

export default class NavBar extends Component {
  render() {
    return (
      <nav className={clsx(styles.navBar)}>
        <a href="#" className={clsx(styles.navBarItem)}>
          Home
        </a>
        <a href="#" className={clsx(styles.navBarItem)}>
          Adversite <IoIosArrowDown />
        </a>
        <a href="#" className={clsx(styles.navBarItem)}>
          Supports <IoIosArrowDown />
        </a>
        <a href="#" className={clsx(styles.navBarItem)}>
          Contact
        </a>
      </nav>
    );
  }
}
