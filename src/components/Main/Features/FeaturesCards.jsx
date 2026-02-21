import { Component } from "react";
import styles from "./features.module.css";
import clsx from "clsx";
import { SlVector } from "react-icons/sl";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoTimer } from "react-icons/io5";

const features = [
  {
    icon: <SlVector size={35} color="#1dca5a" />,
    title: "Vector Editing",
    bg: "rgba(64, 151, 95, 0.2)",
    id: 1,
  },
  {
    icon: <HiMiniPencilSquare size={35} color="#008cff" />,
    title: "Customize & Monitoring",
    bg: "rgba(37, 99, 255, 0.2)",
    id: 2,
  },
  {
    icon: <IoTimer size={35} color="#ff0000" />,
    title: "Quality & short-period",
    bg: "rgba(255, 67, 97, 0.2)",
    id: 3,
  },
];

export default class FeaturesCards extends Component {
  render() {
    return (
      <div className={clsx(styles.featuresCards)}>
        {features.map((item) => (
          <div key={item.id} className={clsx(styles.featuresCardsItem)}>
            <div
              className={clsx(styles.bgPicture)}
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </div>
            <h3 className={clsx(styles.featuresCardsItemTitle)}>
              {item.title}
            </h3>
            <p className={clsx(styles.featuresCardsItemDescription)}>
              Get your blood tests delivered at home, collect a sample from your
              blood tests.
            </p>
          </div>
        ))}
      </div>
    );
  }
}
