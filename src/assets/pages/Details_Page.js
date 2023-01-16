import React from "react";
import Title from "../components/00-Head/title";
import Banner from "../components/00-Head/banner";

import img from "../img/d-banner.jpg";

import View from "../components/12-Details_Product/view";

export default function DetailsPage() {
  return (
    <>
      <Title title="Details Page" />
      <Banner title="product details" img={img} text="details" />

      <View />
    </>
  );
}
