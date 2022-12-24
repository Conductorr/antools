import React from "react";
import { MainPageHeading } from "./MainPageHeading";
import { MainPagePopularTools } from "./MainPagePopularTools";
import { MainPageBrands } from "./MainPageBrands";
import { MainPageNewComerTools } from "./MainPageNewComerTools";
import { MainPageSlider } from "./MainPageSlider";
import { MainPageContributor } from "./MainPageContributor";

function MainPage() {
  return (
    <>
      <MainPageHeading />
      <MainPagePopularTools />
      <MainPageBrands />
      <MainPageNewComerTools />
      <MainPageSlider />
      <MainPageContributor />
    </>
  );
}

export default MainPage;
