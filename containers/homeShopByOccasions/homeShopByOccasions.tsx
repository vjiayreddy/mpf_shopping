"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import TopBottomSpacingComponent from "@/components/common/topBottomSpacing";
import MarqeeSliderComponent from "@/components/sliders/marqeeSlider/marqeeSlider";
import { PRODUCT_CATEGORIES, THEME_MODE } from "@/utils/constants";
import ProductCategoryCardComponent from "@/components/cards/productCategoryCard";
import { useTheme } from "@mui/material/styles";

const HomeShopByOccasionsContainer = () => {
  const theme = useTheme();
  return (
    <TopBottomSpacingComponent>
      <Box mb={5}>
        <Typography gutterBottom textAlign="center" variant="h4">
          Shop By Occasions
        </Typography>
      </Box>

      <MarqeeSliderComponent
        direction="left"
        gradient={true}
        gradientColor={
          theme.palette.mode === THEME_MODE.LIGHT
            ? [255, 255, 255]
            : [18, 18, 18]
        }
        pauseOnHover={true}
      >
        {PRODUCT_CATEGORIES.map((product, index) => (
          <ProductCategoryCardComponent
            key={index}
            title={product.category}
            imgUrl={product.image}
            onClick={() => {}}
          />
        ))}
      </MarqeeSliderComponent>
    </TopBottomSpacingComponent>
  );
};

export default HomeShopByOccasionsContainer;
