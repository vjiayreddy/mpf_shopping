import Box from "@mui/material/Box";
import React from "react";

interface AllSidesSpacingProps {
  children: React.ReactNode;
}

const AllSidesSpacing = ({ children }: AllSidesSpacingProps) => {
  return <Box pt={{xs:5,md:10,lg:10,xl:10}} pb={{xs:5}} pl={{xs:2}} pr={{xs:2}}>{children}</Box>;
};

export default AllSidesSpacing;
