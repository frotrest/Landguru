import { Component } from "react";
import styles from "./quality.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { GiSandsOfTime } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

const quality = [
  {
    icon: <GiSandsOfTime size={35} color="#F55767" />,
    title: "Smart Features",
    bg: "rgba(255, 67, 97, 0.2)",
    id: 1,
  },
  {
    icon: <TfiCup size={35} color="#3DABDD" />,
    title: "Fast Performance",
    bg: "rgba(61, 171, 221, 0.2)",
    id: 2,
  },
  {
    icon: <FaCloudDownloadAlt size={35} color="#D6AB00" />,
    title: "Unlimited Content",
    bg: "rgba(255, 246, 211, 0.2)",
    id: 3,
  },
  {
    icon: <IoMdSettings size={35} color="#40975F" />,
    title: "Ultimate Customization",
    bg: "rgba(64, 151, 95, 0.2)",
    id: 4,
  },
  {
    icon: <FaSquareArrowUpRight size={35} color="#5856D6" />,
    title: "Boost Productivity",
    bg: "rgba(88, 86, 214, 0.2)",
    id: 5,
  },
  {
    icon: <BsFillQuestionDiamondFill size={35} color="#ff9900" />,
    title: "Customer Support",
    bg: "rgba(233, 116, 37, 0.2)",
    id: 6,
  },
];

export default class Quality extends Component {
  render() {
    return (
      <section className={clsx(styles.quality)}>
        <Container className={clsx(styles.qualityContent)} dataAnimate="fadeInLeft">
          <h5 className={clsx(styles.qualityContentPodTitle)}>
            Quality features
          </h5>
          <h2 className={clsx(styles.qualityContentTitle)}>
            Meet exciting feature of app
          </h2>
          <div className={clsx(styles.qualityCards)}>
            {quality.map((item) => (
              <div key={item.id} className={clsx(styles.qualityCard)}>
                <div
                  className={clsx(styles.bgIcon)}
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <div className={clsx(styles.qualityCardContent)}>
                  <h5 className={clsx(styles.qualityCardContentTitle)}>
                    {item.title}
                  </h5>
                  <p className={clsx(styles.qualityCardContentItem)}>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managments.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
}
