import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TimeToTripSlider.module.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import swiper1 from "../../../assets/timetotrip/swiper-1.png";
import swiper2 from "../../../assets/timetotrip/swiper-2.png";

const TimeToTripSlider = () => {
  return (
    <div className={styles.timetotrip_slider}>
      <div className={styles.timetotrip_slider_wrapper}>
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
            <div className={styles.timetotrip_slider_item}>
              <img src={swiper1} alt="sw1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.timetotrip_slider_item}>
              <img src={swiper2} alt="sw2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TimeToTripSlider;
