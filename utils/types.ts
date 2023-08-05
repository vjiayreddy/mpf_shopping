import { CSSProperties, ReactNode } from "react";
import { occasionsResponseType } from "./interfaces";

export type MarqueeProps = {
  style?: CSSProperties;
  className?: string;
  autoFill?: boolean;
  play?: boolean;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  delay?: number;
  loop?: number;
  gradient?: boolean;
  gradientColor?: [number, number, number];
  gradientWidth?: number | string;
  onFinish?: () => void;
  onCycleComplete?: () => void;
  onMount?: () => void;
  children?: ReactNode;
};

export type MegaMenuType = {
  occasions?: occasionsResponseType[];
  regular?: occasionsResponseType[];
  accessories?: occasionsResponseType[];
  all?: occasionsResponseType[];
  errors?: any;
};
