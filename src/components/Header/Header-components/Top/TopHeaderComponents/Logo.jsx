import { Component } from "react";
import { FaChessKing } from "react-icons/fa";
import styles from "../topheader.module.css";
import clsx from "clsx";

export default class Logo extends Component {
  render() {
    return (
      <div className={clsx(styles.logoBlock)}>
        <FaChessKing color="white" size="30" />
        <h5 className={clsx(styles.logoBlockTitle)}>Landguru</h5>
      </div>
    );
  }
}
