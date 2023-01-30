import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filter from "./filter";

export default function Collection() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductRedu);
  const { sort, filters, filtered_products } = useSelector(
    (state) => state.FilterReducer
  );

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, sort, filters]);

  return (
    <>
      <section className="collection">
        <div className="container">
          <div className="row justify-content-between">
            <Filter product={filtered_products} />
          </div>
        </div>
      </section>
    </>
  );
}
