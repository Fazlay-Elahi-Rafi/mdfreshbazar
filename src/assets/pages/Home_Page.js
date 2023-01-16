import React from "react";
import Title from "../components/00-Head/title";

import Header from "../components/01-Header/header";
import Items from "../components/02-Items/items";
import Adds from "../components/03-adds/adds";
import ShopNow from "../components/04-shopNow/shopNow";
import Category from "../components/05-Category/category";
import Sells from "../components/06-Sells/sells";
import Limited from "../components/07-Limited/limited";
import Type from "../components/08-All_Types/type";
import Feedback from "../components/09-FeedBack/feedback";

export default function HomePage() {
  return (
    <>
      <Title title="Home Page" />

      <Header />
      <Items />
      <Adds />
      <ShopNow />
      <Category />
      <Sells />
      <Limited />
      <Type />
      <Feedback />
    </>
  );
}
