import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsGrid } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

import Filter from "./filter";
import Pagination from "./pagination";

import img from "../../img/header-bg04.png";

export default function Collection() {
  const { products } = useSelector((state) => state.ProductRedu);

  const [isActive, setActive] = useState(false);

  return (
    <>
      <section className="collection">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3 d-none d-lg-block">
              <Filter />
            </div>

            <div className="col-12 col-lg-8">
              <div className="row px-2 px-sm-0">
                <div className="card collection__adds">
                  <img
                    src={img}
                    className="img-fluid w-50 h-100 ms-auto"
                    alt="image"
                  />
                  <div className="card-img-overlay collection__adds-layer">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-8 col-xl-6">
                      <p className="collection__adds-offer">
                        best organic fruit get 40% off
                      </p>
                      <h5 className="collection__adds-text">
                        fresh and organic vegetable & fruit
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row px-2 px-sm-0">
                <div className="collection__bar">
                  <div className="">
                    <BsGrid
                      className={`collection__bar-i ${
                        isActive ? "" : "collection__bar-active"
                      }`}
                      onClick={() => setActive(false)}
                    />
                    <AiOutlineUnorderedList
                      className={`collection__bar-i ${
                        isActive ? "collection__bar-active" : ""
                      }`}
                      onClick={() => setActive(true)}
                    />
                  </div>
                  <div className="">
                    <select className="collection__bar-select">
                      <option value="">featured</option>
                      <option value="">price: low to high</option>
                      <option value="">price: high to low</option>
                      <option value="">release: data</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row px-2 px-sm-0">
                <Pagination products={products} isActive={isActive} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
