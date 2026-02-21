import { Component } from "react";
import styles from "./header.module.css";
import clsx from "clsx";
import TopHeader from "./Header-components/Top/TopHeader";
import BottomHeader from "./Header-components/Bottom/BottomHeader";

export default class Header extends Component {
  render() {
    return (
      <header className={clsx(styles.header)}>
        <TopHeader />
        <BottomHeader />
      </header>
    );
  }
}
