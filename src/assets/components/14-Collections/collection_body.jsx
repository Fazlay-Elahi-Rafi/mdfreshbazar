import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";

import { BsCart2 } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

import { addToCartAction } from "../../redux/action/cartAction";

export default function CollectionBody({ product, isActive }) {
  const { id, save, image, name, rating, about, price, oldPrice } = product;

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const addFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));

    setTimeout(() => {
      dispatch({ type: "CLEAR_CART_ERROR" });
    }, 3000);
  };
  
  return (
    <div
      key={id}
      className={`px-2 py-0 ${isActive ? "col-12" : "col-sm-6 col-xl-4"}`}
    >
      <div
        className={`sells__card sells__card-items collection__card card ${
          isActive ? "collection__card-column" : ""
        }`}
      >
        <div
          className={`sells__card-top ${isActive ? "col-12 col-md-10" : ""}`}
        >
          <div className="sells__card-disc">
            <span className="sells__card-disc--span">save {save}</span>
          </div>
          <div className="sells__card-icons">
            <Link
              to={`/details/${id}`}
              className="sells__card-icons--div lh-1 w-50 text-center"
            >
              <AiOutlineEye />
            </Link>
            <div className="sells__card-icons--div lh-1 w-50 text-center">
              <AiOutlineHeart />
            </div>
          </div>
          <div
            className={`sells__card-image ${
              isActive ? "collection__card-img" : ""
            }`}
          >
            <Link to={`/details/${id}`}>
              <img src={image} className="img-fluid" alt="img" />
            </Link>
          </div>
        </div>
        <div
          className={`sells__card-body ${
            isActive ? "collection__card-body col-12 col-md-10" : ""
          }`}
        >
          <div className="mx-3">
            <Link to={`/details/${id}`} className="limited__card-title">
              {name}
            </Link>
          </div>

          <ul className="limited__card-ul sells__card-body--ul collection__card-ul">
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              max={5}
              readOnly
            />
          </ul>
          <div className="mx-3">
            <h5 className="limited__card-by">
              by
              <a href="#" className="limited__card-by--span">
                mdRafi
              </a>
            </h5>

            {isActive ? (
              <p className="collection__card-p view__para">{about}</p>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mx-3">
            <div className="limited__card-price">
              <span className="limited__card-price--new">${price}</span>
              <del className="limited__card-price--old">${oldPrice}</del>
            </div>
            <div className="">
              <button
                className="limited__card-btn btn"
                onClick={() => addFun(id, amount, product)}
              >
                <span>
                  <BsCart2 className="limited__card-btn--icon" />
                </span>
                {isActive ? "add to cart" : "add"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
