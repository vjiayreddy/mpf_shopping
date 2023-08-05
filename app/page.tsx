"use client";
import HomeAchievementContainer from "@/containers/homeAchievement/homeAchievement";
import HomeBannerContainer from "@/containers/homeBanner/homeBanner";
import HomeDiscoverContainer from "@/containers/homeDiscover/homeDiscover";
import HomeShopByOccasionsContainer from "@/containers/homeShopByOccasions/homeShopByOccasions";
import HomeShopByProductsContainer from "@/containers/homeShopByProducts/homeShopByProducts";
import Container from "@mui/material/Container";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Container maxWidth="xl" disableGutters>
        <HomeBannerContainer />
      </Container>
      <Container disableGutters maxWidth="md">
        <HomeAchievementContainer />
      </Container>
      <Container disableGutters maxWidth="xl">
        <HomeShopByOccasionsContainer />
        <HomeShopByProductsContainer />
        <HomeDiscoverContainer />
      </Container>
    </Fragment>
  );
}
