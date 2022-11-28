import React from "react";

import Head from "../components/00-Head/head";
import Menu from "../components/00-Head/menu";
import Middle from "../components/00-Head/middle";
import Navbar from "../components/00-Head/navbar";
import Header from "../components/01-Header/header";
import Items from "../components/02-Items/items";
import Adds from "../components/03-adds/adds";
import ShopNow from "../components/04-shopNow/shopNow";
import Category from "../components/05-Category/category";
import Sells from "../components/06-Sells/sells";
import Limited from "../components/07-Limited/limited";
import Type from "../components/08-All_Types/type";
import Feedback from "../components/09-FeedBack/feedback";
import News from "../components/10-News_Letter/news";
import Service from "../components/11-Service/service";
import Footer from "../components/12-Footer/footer";

export default function Home() {
  return (
    <>
      <Head />
      <Middle />
      <Navbar />
      <Menu />
      <Header />
      <Items />
      <Adds />
      <ShopNow />
      <Category />
      <Sells />
      <Limited />
      <Type />
      <Feedback />
      <News />
      <Service />
      <Footer />
    </>
  );
}
