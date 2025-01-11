import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CustomSwiper = ({
  slides = [],
  autoplayDelay = 2500,
  spaceBetween = 30,
  centeredSlides = true,
  navigation = true,
  pagination = true,
  swiperClassName = "",
}) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className={`mySwiper ${swiperClassName}`}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default CustomSwiper;
