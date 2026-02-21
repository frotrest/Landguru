import { Component } from "react";
import styles from "./customers.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaStar } from "react-icons/fa6";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const customers = [
  {
    stars: 3,
    title: "Modern look & trending design",
    avatar: "/src/img/first-customer.png",
  },
  {
    stars: 4,
    title: "Design Quality & performance",
    avatar: "/src/img/second-customer.png",
  },
  {
    stars: 5,
    title: "Layout and organized layers",
    avatar: "/src/img/third-customer.png",
  },
  {
    stars: 4,
    title: "Modern look & trending design",
    avatar: "/src/img/fourth-customer.png",
  },
];

export default class Customers extends Component {
  render() {
    return (
      <section className={clsx(styles.customers)}>
        <Container className={clsx(styles.customersContent)}>
          <div className={clsx(styles.titleSect)}>
            <h5 className={clsx(styles.customersContentPodTitle)}>
              Testimunial
            </h5>
            <h2 className={clsx(styles.customersContentTitle)}>
              Meet Client Satisfaction
            </h2>
          </div>
        </Container>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          navigation={{
            nextEl: `.${styles.nextBtn}`,
            prevEl: `.${styles.prevBtn}`,
          }}
          autoplay={{
            delay: 5000,
          }}
          direction="horizontal"
          speed={300}
          centeredSlides={true}
          slidesPerView={4}
        >
          {customers.map((item, index) => (
            <SwiperSlide key={index} className={clsx(styles.customerCard)}>
              <div className={clsx(styles.customer)}>
                <div className={clsx(styles.customerStars)}>
                  {Array.from({ length: item.stars }).map((item, i) => (
                    <FaStar
                      color="#ffee00"
                      key={i}
                      className={clsx(styles.star)}
                    />
                  ))}
                </div>
                <h3 className={clsx(styles.customerTitle)}>{item.title}</h3>
                <p className={clsx(styles.customerItem)}>
                  Get working experience to work with this amazing team & in
                  future want to work together for bright future projects and
                  also make deposit to freelancer.
                </p>
                <div className={clsx(styles.customerInfo)}>
                  <img
                    src={item.avatar}
                    alt="customer-avatar"
                    className={clsx(styles.customerAvatar)}
                  />
                  <div className={clsx(styles.customerText)}>
                    <h5 className={clsx(styles.customerTextTitle)}>
                      Denny Hilguston
                    </h5>
                    <p className={clsx(styles.customerTextLink)}>@denny.hil</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={clsx(styles.controlSwiper)}>
            <div className={clsx(styles.nextBtn)}>
              <BsArrowLeft />
            </div>
            <div className={clsx(styles.prevBtn)}>
              <BsArrowRight />
            </div>
          </div>
        </Swiper>
      </section>
    );
  }
}
