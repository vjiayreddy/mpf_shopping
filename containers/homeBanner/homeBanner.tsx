"use client";

import SwiperSliderComponent from "@/components/sliders/swipeSlider/swiperSlider";
import React from "react";
import { SwiperSlide } from "swiper/react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { THEME_MODE } from "@/utils/constants";

const StyledBanner = styled(Box)(({ theme }) => ({
  height: 450,
  backgroundColor:
    theme.palette.mode === THEME_MODE.LIGHT
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 20,
  boxSizing: "border-box",
}));

const HomeBannerContainer = () => {
  return (
    <SwiperSliderComponent>
      <SwiperSlide>
        <StyledBanner>
          <Grid container flexDirection="column">
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h3">
                Custom OutFits Crafted for you
              </Typography>
            </Grid>
          </Grid>
        </StyledBanner>
      </SwiperSlide>
    </SwiperSliderComponent>
  );
};

export default HomeBannerContainer;
