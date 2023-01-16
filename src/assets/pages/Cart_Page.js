import React from "react";

import Banner from "../components/00-Head/banner";
import Title from "../components/00-Head/title";

import img from "../img/d-banner.jpg";

import Cart from "../components/13-Cart/cart";

export default function CartPage() {
  
  return (
    <>
      <Title title="Cart Page" />
      <Banner title="cart" text="cart" img={img} />

      <Cart />
    </>
  );
}
