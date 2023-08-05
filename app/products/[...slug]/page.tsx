import React from "react";
import { getProductsbyFilter } from "@/apollo/services/services";
import _ from "lodash";
import ProductsContainer from "@/containers/productsContainer/productsContainer";
import { Container } from "@mui/material";

const ProductsPage = async (props: any) => {
  const { searchParams } = props;
  const data = await getProductsbyFilter(props);
  return (
    <Container disableGutters maxWidth="lg">
      {data?.data?.products && (
        <ProductsContainer
          products={data?.data?.products}
          searchParams={searchParams}
        />
      )}
    </Container>
  );
};

export default ProductsPage;
