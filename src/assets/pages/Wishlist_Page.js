import React from "react";

import Banner from "../components/00-Head/banner";
import Title from "../components/00-Head/title";

import img from "../img/d-banner.jpg";

export default function WishlistPage() {
  return (
    <>
      <Title title="Wishlist Page" />
      <Banner title="your wishlist" text="wishlist" img={img} />
    </>
  );
}
