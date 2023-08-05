import TopBottomSpacingComponent from "@/components/common/topBottomSpacing";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import React from "react";

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  width: "45%",
  margin: "0 auto",
}));

const HomeDiscoverContainer = () => {
  return (
    <TopBottomSpacingComponent>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Typography gutterBottom textAlign="center" variant="body1">
            Changing the way Men Shop
          </Typography>
          <StyledSectionTitle gutterBottom textAlign="center" variant="h4">
            Discover a whole new way to stay stylish - with My Perfect Fit
          </StyledSectionTitle>
        </Grid>
      </Grid>
    </TopBottomSpacingComponent>
  );
};

export default HomeDiscoverContainer;
