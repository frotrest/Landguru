import { Component } from "react";
import styles from "../bottomheader.module.css";
import clsx from "clsx";
import { IoIosPlayCircle } from "react-icons/io";
import mockup from '@/assets/img/mockup.png';

export default class Hero extends Component {
  render() {
    return (
      <div className={clsx(styles.hero)}>
        <div className={styles.heroDescription}>
          <h2 className={clsx(styles.heroDescriptionTitle)}>
            Experience your ultimate mobile application
          </h2>
          <p className={clsx(styles.heroDescriptionItem)}>
            Get your blood tests delivered at let home collect sample from the
            victory of the managments that supplies best design system
            guidelines ever.
          </p>
          <div className={clsx(styles.heroDescriptionBtns)}>
            <button className={clsx(styles.heroDescriptionBtnsItem)}>
              Get Started
            </button>
            <a href="#" className={clsx(styles.heroDescriptionBtnsVideo)}>
              <IoIosPlayCircle size={25} /> Watch Video
            </a>
          </div>
        </div>
        <img
          src={mockup}
          alt="mockup"
          className={clsx(styles.heroImg)}
        />
      </div>
    );
  }
}
