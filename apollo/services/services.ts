import { MegaMenuType } from "@/utils/types";
import apolloClient from "../config";
import {
  GET_ALL_OCCASIONS,
  GET_OCCASION_CONFIG,
  GET_PRODUCTS_BY_FILTER,
} from "../queries/products";
import { occasionsResponseType } from "@/utils/interfaces";
import _ from "lodash";
import { ProductSideFiltersType } from "../gql/types";
import { PRODUCT_PAGE_LIMIT } from "@/utils/constants";

type ProductFilterType = {
  topCategories?: any;
  sideFilters?: ProductSideFiltersType;
  products?: any;
};

type GetOccasionsDataType = () => Promise<{ data: MegaMenuType }>;
type GetOccasionConfigType = (matchedOccasion: string) => Promise<{
  occasionConfigData: occasionsResponseType;
  occasionConfigError: any;
}>;
type GetProductsbyFilterFunctionType = (props: any) => Promise<{
  data: ProductFilterType;
}>;

export const getOccasionsData: GetOccasionsDataType = async () => {
  let navMenus: MegaMenuType = {
    occasions: [],
    accessories: [],
    regular: [],
    all: [],
    errors: null,
  };

  try {
    const { data, error } = await apolloClient.query({
      query: GET_ALL_OCCASIONS,
      errorPolicy: "all",
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
    });
    if (!data && error) {
      return {
        data: navMenus,
      };
    }
    navMenus.regular = data.getAllOccasions.filter(
      (item: any) => item._id === "5fc2677bfa7ff20df01ab8ce"
    );
    navMenus.accessories = data.getAllOccasions.filter(
      (item: any) => item._id === "6006f48dd47a4914dcd7ea79"
    );
    navMenus.occasions = data.getAllOccasions.filter(
      (item: any) =>
        item._id !== "5fc2677bfa7ff20df01ab8ce" &&
        item._id !== "6006f48dd47a4914dcd7ea79"
    );
    navMenus.all = data.getAllOccasions;
  } catch (error: any) {
    if (error.networkError && error.graphQLErrors.length === 0) {
      navMenus.errors = {
        errorType: "Network Error",
        gqlResolver: "getAllOccasions",
        message: `${error.networkError}`,
      };
    }
  }

  return {
    data: navMenus,
  };
};

export const getOccasionsConfig: GetOccasionConfigType = async (
  matchedOccasion: string
) => {
  let occasionConfigData: occasionsResponseType[] = [];
  let occasionConfigError: any = null;

  try {
    const { data, error } = await apolloClient.query({
      query: GET_OCCASION_CONFIG,
      errorPolicy: "all",
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
      variables: {
        occasionId: matchedOccasion,
      },
    });

    if (!data && error) {
      occasionConfigError = {
        errorType: "Gql Error",
        gqlResolver: "getOccasionConfig",
        message: `${error}`,
      };
    }
    return {
      occasionConfigData: data?.getOccasionConfig,
      occasionConfigError,
    };
  } catch (error: any) {
    occasionConfigError = {
      errorType: "Network Error",
      gqlResolver: "getOccasionConfig",
      message: `${error?.networkError}`,
    };
  }

  return {
    occasionConfigData,
    occasionConfigError,
  };
};

export const getProducts = async (occasionId: string, props: any) => {
  let productsData: any = {
    products: null,
    error: null,
  };
  const { searchParams } = props;
  try {
    const { data, error } = await apolloClient.query({
      errorPolicy: "all",
      query: GET_PRODUCTS_BY_FILTER,
      context: {
        fetchOptions: {
          next: { revalidate: 120 },
        },
      },
      variables: {
        params: {
          occasionId: occasionId,
        },
        page: Number(searchParams?.page) || 1,
        limit: PRODUCT_PAGE_LIMIT,
      },
    });

    if (!data && error) {
      productsData.error = error;
    }
    productsData.products = data?.productsFilter?.products;
  } catch (error: any) {
    productsData.error = {
      errorType: "Network Error",
      gqlResolver: "productsFilter",
      message: `${error?.networkError}`,
    };
  }

  return {
    productsData,
  };
};

export const getProductsbyFilter: GetProductsbyFilterFunctionType = async (
  props: any
) => {
  const { params } = props;
  const { slug } = params;
  const { data } = await getOccasionsData();
  let finalData: ProductFilterType = {};
  try {
  } catch (error) {}
  if (slug?.length === 1) {
    const matchedOccasion: any = _.find(
      data.all,
      (item: any) => item?.name === slug[0]
    );
    if (matchedOccasion) {
      const { occasionConfigData, occasionConfigError } =
        await getOccasionsConfig(matchedOccasion._id);
      const { data, error } = await apolloClient.query({
        errorPolicy: "all",
        query: GET_PRODUCTS_BY_FILTER,
        context: {
          fetchOptions: {
            next: { revalidate: 60 },
          },
        },
        variables: {
          params: {
            occasionId: matchedOccasion._id,
          },
        },
      });
      const { productsData } = await getProducts(matchedOccasion?._id, props);
      finalData.topCategories = occasionConfigData?.categories;
      finalData.sideFilters = occasionConfigData?.sideFilters;
      finalData.products = productsData?.products;
    }
  } else if (slug?.length === 2) {
  }
  return {
    data: finalData,
  };
};
