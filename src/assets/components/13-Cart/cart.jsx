import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartBody from "./cartBody";
import Empty from "./empty";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, total_amount, shipping_fee } = useSelector(
    (state) => state.CartReducer
  );

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("project13", JSON.stringify(cart));
  }, [cart]);


  return (
    <>
      <section className="cart">
        <div className="container">
          {cart.length === 0 ? (
            <Empty />
          ) : (
            <div className="row">
              <div className="col-12 col-xl-8 ps-md-3 pe-md-4">
                <div className="row d-none d-md-flex">
                  <div className="cart__table-head d-flex">
                    <div className="col-6">
                      <p className="cart__table-head--p text-start">item</p>
                    </div>
                    <div className="col-2">
                      <p className="cart__table-head--p">price</p>
                    </div>
                    <div className="col-2">
                      <p className="cart__table-head--p">quantity</p>
                    </div>
                    <div className="col-2">
                      <p className="cart__table-head--p">total price</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {cart.map((item) => {
                    return <CartBody key={item.id} {...item} />;
                  })}

                  <div className="p-0 text-end">
                    <button
                      className="cart__clearbtn"
                      onClick={() => dispatch({ type: "CLEAR_CART" })}
                    >
                      clear all
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-8 col-xl-4 ps-xl-4 m-auto mt-5 mt-xl-0">
                <div className="cart__summary">
                  <h3 className="cart__summary-heading">Cart Totals</h3>

                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="cart__summary-text">Subtotal</h4>
                    <p className="cart__summary-price">${total_amount}</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="cart__summary-text">shipping fee</h4>
                    <p className="cart__summary-price">${shipping_fee}</p>
                  </div>
                  <hr className="cart__summary-hr" />

                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="cart__summary-text">total</h4>
                    <p className="cart__summary-price">
                      ${total_amount + shipping_fee}
                    </p>
                  </div>
                  <div className="text-end">
                    <button className="cart__summary-btn">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
