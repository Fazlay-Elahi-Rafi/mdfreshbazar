import React from "react";

import Banner from "../components/00-Head/banner";
import Title from "../components/00-Head/title";

import Collection from "../components/14-Collections/collection";

import img from "../img/d-banner.jpg";

export default function CollectionPage() {
  return (
    <>
      <Title title="Collection Page" />
      <Banner title="your collection" text="product" img={img} />

      <Collection />
    </>
  );
}
