"use client";
import Pagination from "@mui/material/Pagination";
import React from "react";
import { useRouter,useParams } from "next/navigation";

const PageNation = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      onChange={(_, page) => {
        router.push(`/looks?page=${page}`);
        console.log(page);
      }}
    />
  );
};

export default PageNation;
