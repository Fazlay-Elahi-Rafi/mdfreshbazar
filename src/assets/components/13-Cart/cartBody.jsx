import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

import { deleteProduct, toggleAmount } from "../../redux/action/cartAction";

export default function CartBody({ id, image, name, price, amount, category }) {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(toggleAmount(id, "inc"));
  };
  const decrease = () => {
    dispatch(toggleAmount(id, "dec"));
  };

  return (
    <>
      <div className="cart__table d-md-flex align-items-center text-center">
        <div className="col-10 col-sm-8 col-md-6 m-auto">
          <div className="d-md-flex align-items-center justify-content-between text-start cart__table-body--m">
            <div className="col-12 col-md-5">
              <img
                className="img-fluid cart__table-body--img"
                src={image}
                alt="image"
              />
            </div>

            <div className="col-12 col-md-6">
              <Link to={`/details/${id}`} className="cart__table-name">
                {name}
              </Link>
              <span className="cart__table-cate">Category: {category}</span>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-md-2 m-auto text-start text-md-center">
          <p className="cart__table-price">${price}</p>
        </div>
        <div className="col-10 col-sm-8 col-md-2 m-auto text-start text-md-center">
          <p className="cart__table-price">
            <IoMdArrowDropleft className="cart__table-i" onClick={decrease} />
            <span className="cart__table-num">{amount}</span>
            <IoMdArrowDropright className="cart__table-i" onClick={increase} />
          </p>
        </div>
        <div className="col-10 col-sm-8 col-md-2 m-auto text-start text-md-center">
          <p className="cart__table-price">${price * amount}</p>
        </div>
      </div>
      <div className="col-10 col-md-12 text-center text-md-end pb-2 m-auto">
        <MdOutlineDelete
          className="cart__table-del"
          onClick={() => dispatch(deleteProduct(id))}
        />
      </div>
      <hr className="cart__table-border" />
    </>
  );
}
