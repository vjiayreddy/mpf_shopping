import AchievementCard from "@/components/cards/achievementCard";
import AllSidesSpacingComponent from "@/components/common/allSidesSpacing";
import TopBottomSpacingComponent from "@/components/common/topBottomSpacing";
import { ACHIVEMENTS } from "@/utils/constants";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

const HomeAchievementContainer = () => {
  return (
    <AllSidesSpacingComponent>
      <Grid container direction="column" >
        <Grid mb={6} item xs={12}>
          <Typography variant="body1" textAlign="center">
            Looking your best gets easy with My Perfect Fit by your side.
            Discover a whole new way to shop for menswear with custom clothing,
            stylist assistance, premium fabrics, online measurements and so much
            more. Begin your journey to a perfectly styled future today
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {ACHIVEMENTS.map((item, index) => (
            <Grid key={index} alignSelf="center" xs={6} item sm={6} md={3} lg={3}>
              <AchievementCard label={item.total} content={item.label} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </AllSidesSpacingComponent>
  );
};

export default HomeAchievementContainer;
