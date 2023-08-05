import { ProductSideFiltersType } from "@/apollo/gql/types";

export type occasionSeoType = {
  content_description: string;
  h1_tag: string;
  h2_tag: string;
  meta_description: string;
  title: string;
};

export type categorySeoType = {
  altText: string;
  content_description: string;
  h1_tag: string;
  h2_tag: string;
  meta_description: string;
  title: string;
};

export type occasionCategoryType = {
  _id: string;
  image: string;
  isEnabled: boolean;
  isEnabledForPersonalize: boolean;
  label: string;
  name: string;
  personalizeImage: string;
  personalizeNote: string;
  seo: categorySeoType;
};
export interface occasionsResponseType {
  _id: string;
  name: string;
  label: string;
  catIds: string[];
  occasionType: string;
  categories: occasionCategoryType[];
  seo: occasionSeoType;
  sideFilters: ProductSideFiltersType;
}
