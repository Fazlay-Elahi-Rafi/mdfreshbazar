import React from "react";
import { Link } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Empty() {
  return (
    <>
      <div className="row">
        <div className="cart__empty">
          <div className="">
            <h2 className="cart__empty-text">
              Your <br /> <span className="cart__empty-span">cart </span>
              is currently <br />
              <span className="cart__empty-span">empty!</span>
            </h2>
          </div>
          <div className="">
            <Link to="/products" className="cart__clearbtn cart__empty-btn">
              <HiOutlineShoppingBag className="cart__empty-btn--i" />
              continue shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
