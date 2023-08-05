import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageNation from "./components/pagination";

const getUser = async (page: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${page}`
  );
  const data = await response.json();
  return {
    userData: data,
  };
};

const LooksPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const { userData } = await getUser(searchParams?.page);
  return (
    <Container disableGutters maxWidth="lg">
      <Box sx={{ backgroundColor: "red" }}>Hello</Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Box p={1}>
          <PageNation />
        </Box>
      </Suspense>
    </Container>
  );
};

export default LooksPage;
