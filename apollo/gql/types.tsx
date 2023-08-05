export type ProductTagType = {
  catTag: string;
  image: string;
  isModifiable: boolean;
  isVisible: boolean;
  label: string;
  name: string;
  value: string;
};

export type MasterProductType = {
  _id: string;
  image: string;
  name: string;
  personalizeImage: string;
  note: string;
};

export type ColorType = {
  _id: string;
  color: string;
  colorname: string;
  label: string;
};

export type ProductType = {
  _id: string;
  images: string[];
  name: string;
  title: string;
  price: number;
  pid: number;
  pImgIndx: number;
  pidSerial: number;
  warranty: string;
  isAvailable: boolean;
  qty: number;
  producttypeId: string;
  size: string;
  deliveryDays: number;
  delivery: string;
  isPer: boolean;
  code: string;
  catId: string;
  discPrice: string;
  tags: ProductTagType[];
  description: string;
  fabric: MasterProductType;
  secondaryColor: ColorType;
};

type ColorFilterType = {
  _id: string;
  color: string;
  colorname: string;
  label: string;
  primaryColor: string;
};

type PattrenFilterType = {
  _id: string;
  name: string;
  catId: string;
  label: string;
  image: string;
};

type FabricFiltersType = {
  _id: string;
  name: string;
  catId: string;
  image: string;
  personalizeImage: string;
};

type OccasionFiltersType = {
  _id: string;
  title: string;
  name: string;
};

export type ProductSideFiltersType = {
  isColorFilterEnabled: boolean;
  colorFilters: ColorFilterType[];
  isPatternFilterEnabled: boolean;
  patternFilters: PattrenFilterType[];
  isFabricFilterEnabled: boolean;
  fabricFilters: FabricFiltersType[];
  isPriceRangeFilterEnabled: boolean;
  occasionFilters: OccasionFiltersType[];
  minPrice: number;
  maxPrice: number;
};
