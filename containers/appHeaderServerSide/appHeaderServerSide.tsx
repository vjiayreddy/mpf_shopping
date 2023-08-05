import React from "react";
import { getOccasionsData } from "@/apollo/services/services";
import AppHeaderComponent from "./components/appHeader";

const AppHeaderServerSiderComponent = async() => {
  const {data} = await getOccasionsData();   
  return <AppHeaderComponent menus={data} />;
};

export default AppHeaderServerSiderComponent;
