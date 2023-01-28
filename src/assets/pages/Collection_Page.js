import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../components/00-Head/banner";
import Title from "../components/00-Head/title";

import Collection from "../components/14-Collections/collection";

import img from "../img/d-banner.jpg";

import { BsCheck2Circle } from "react-icons/bs";

export default function CollectionPage() {
  const { msg } = useSelector((state) => state.CartReducer);
  
  return (
    <>
      <Title title="Collection Page" />
      <Banner title="your collection" text="product" img={img} />
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

      <Collection />
    </>
  );
}
