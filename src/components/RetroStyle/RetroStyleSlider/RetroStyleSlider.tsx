import styles from "./RetroStyleSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import swiper1 from "../../../assets/retrostyle/swiper-1.png";
import swiper2 from "../../../assets/retrostyle/swiper-2.png";
import swiper3 from "../../../assets/retrostyle/swiper-3.png";
import swiper4 from "../../../assets/retrostyle/swiper-4.png";
import swiper5 from "../../../assets/retrostyle/swiper-5.png";
import swiper6 from "../../../assets/retrostyle/swiper-6.png";

const RetroStyleSlider = () => {
  return (
    <div className={styles.retrostyle_slider}>
      <div className={styles.retrostyle_slider_wrapper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}>
          <SwiperSlide>
            <div className={styles.retrostyle_slider_item}>
              <img src={swiper1} alt="sw1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.retrostyle_slider_item}>
              <img src={swiper2} alt="sw2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.retrostyle_slider_item}>
              <img src={swiper3} alt="sw3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.retrostyle_slider_item}>
              <img src={swiper4} alt="sw4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.retrostyle_slider_item}>
              <img src={swiper5} alt="sw5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.retrostyle_slider_item}>
              <img src={swiper6} alt="sw6" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RetroStyleSlider;
