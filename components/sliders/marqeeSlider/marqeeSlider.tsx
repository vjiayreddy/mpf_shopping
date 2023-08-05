'use client';
import { MarqueeProps } from "@/utils/types";
import React from "react";
import Marquee from "react-fast-marquee";

interface MarqeeSliderComponentProps extends MarqueeProps {}

const MarqeeSliderComponent = ({
  children,
  ...props
}: MarqeeSliderComponentProps) => {
  return <Marquee {...props}>{children}</Marquee>;
};

export default MarqeeSliderComponent;
