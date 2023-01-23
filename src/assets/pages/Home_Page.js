import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { BsCheck2Circle } from "react-icons/bs";

export default function HomePage() {
  const { msg } = useSelector((state) => state.CartReducer);
  return (
    <>
      <Title title="Home Page" />
      {msg !== "" ? (
        <div className="msg">
          <div className="">
            <h3 className="msg__text">
              <BsCheck2Circle className="msg__i" /> {msg}
            </h3>
          </div>
        </div>
      ) : (
        ""
      )}

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
