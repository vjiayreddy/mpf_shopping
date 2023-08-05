"use client";

import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { useRouter, usePathname } from "next/navigation";
interface ProductsContainerProps {
  products: any[];
  searchParams: any;
}

const ProductsContainer = ({
  products,
  searchParams,
}: ProductsContainerProps) => {
  const router = useRouter();
  const path = usePathname();
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    router.push(`${path}?page=${page}`);
  };

  return (
    <Grid container>
      {products.map((product) => (
        <Grid key={product._id} item md={3}>
          <Image
            alt={product.title}
            src={product.images[0]}
            width={150}
            height={200}
            blurDataURL={product.images[0]}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Pagination
          defaultPage={Number(searchParams?.page) || 1}
          count={10}
          variant="outlined"
          onChange={handlePagination}
        />
      </Grid>
    </Grid>
  );
};

export default ProductsContainer;
