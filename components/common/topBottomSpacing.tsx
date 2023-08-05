import Box from "@mui/material/Box";
import React from "react";

interface TopBottomSpacingComponentProps {
  children: React.ReactNode;
}

const TopBottomSpacingComponent = ({
  children,
}: TopBottomSpacingComponentProps) => {
  return (
    <Box
      pt={{ xs: 5, md: 10, lg: 10, xl: 10 }}
    >
      {children}
    </Box>
  );
};

export default TopBottomSpacingComponent;
