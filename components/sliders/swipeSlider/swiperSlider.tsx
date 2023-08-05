import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperProps } from "swiper/react";

interface SwiperSliderComponentProps extends SwiperProps {}

const SwiperSliderComponent = ({
  children,
  ...props
}: SwiperSliderComponentProps) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default SwiperSliderComponent;
