import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsCart2 } from "react-icons/bs";

import Rating from "@mui/material/Rating";

import { data } from "./data";
import Timer from "./timer";

import { addToCartAction } from "../../redux/action/cartAction";

export default function Limited() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(data);
  const [amount, setAmount] = useState(1);

  const addFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));

    setTimeout(() => {
      dispatch({ type: "CLEAR_CART_ERROR" });
    }, 3000);
  };

  return (
    <>
      <section className="limited">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h1 className="adds__title m-0">deals of the day</h1>
            </div>
          </div>
          <div className="row">
            {product.map((data) => {
              return (
                <div
                  className="col-12 col-sm-10 col-md-6 col-lg-4"
                  key={data.id}
                >
                  <div className="card limited__card border-0">
                    <img
                      src={data.image}
                      className="img-fluid limited__card-img"
                      alt="fruits img"
                    />
                    <div className="limited__card-body">
                      <Timer
                        targetDate={data.targetDate}
                        targetTime={data.targetTime}
                      />

                      <div className="">
                        <a href="#" className="limited__card-title">
                          {data.name}
                        </a>

                        <Rating
                          sx={{
                            color: "#e5b700",
                            fontSize: "1.5rem",
                            margin: "5px 0 8px -3px",
                          }}
                          name="half-rating-read"
                          defaultValue={data && data.rating}
                          precision={0.5}
                          max={5}
                          readOnly
                        />

                        <div className="mt-0">
                          <h5 className="limited__card-by">
                            by
                            <a href="#" className="limited__card-by--span">
                              {data.onwer}
                            </a>
                          </h5>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <div className="limited__card-price">
                            <span className="limited__card-price--new">
                              ${data.price}
                            </span>
                            <del className="limited__card-price--old">
                              ${data.oldPrice}
                            </del>
                          </div>
                          <div className="">
                            <button
                              href="#"
                              className="limited__card-btn btn"
                              onClick={() => addFun(data.id, amount, data)}
                            >
                              <span>
                                <BsCart2 className="limited__card-btn--icon" />
                              </span>
                              add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
