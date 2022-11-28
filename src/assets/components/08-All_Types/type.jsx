import React, { useState, useEffect } from "react";

import Rating from "@mui/material/Rating";

import { Data } from "./data";

export default function Type() {
  const [value, setValue] = useState(Data);

  return (
    <>
      <section className="types">
        <div className="container">
          <div className="row d-block d-lg-flex">
            <div className="col-md-10 col-lg-4 mb-5 mb-xl-0">
              <h2 className="adds__title types__title m-0">top selling</h2>

              <div className="types__scroll">
                {value &&
                  value.topSell.map((data) => {
                    return (
                      <div className="types__card" key={data.id}>
                        <div className="row g-0">
                          <div className="col-5 d-flex">
                            <a href="#">
                              <img
                                className="types__card-img img-fluid"
                                src={data.image}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="col-7 m-auto">
                            <div className="card-body">
                              <a href="#" className="types__card-name">
                                {data.name}
                              </a>

                              <div className="d-flex align-items-center">
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={data.rating}
                                  precision={0.5}
                                  max={5}
                                  readOnly
                                />
                                <span>({data.rating})</span>
                              </div>

                              <div className="d-flex justify-content-between align-items-center my-2">
                                <div className="types__card-price">
                                  <span className="types__card-price--new">
                                    ${data.price}
                                  </span>
                                  <del className="types__card-price--old">
                                    ${data.oldPrice}
                                  </del>
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
            <div className="col-md-10 col-lg-4 mb-5 mb-xl-0">
              <h2 className="adds__title types__title m-0">
                trending products
              </h2>

              <div className="types__scroll">
                {value &&
                  value.trending.map((data) => {
                    return (
                      <div className="types__card" key={data.id}>
                        <div className="row g-0">
                          <div className="col-5 d-flex">
                            <a href="#">
                              <img
                                className="types__card-img img-fluid"
                                src={data.image}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="col-7 m-auto">
                            <div className="card-body">
                              <a href="#" className="types__card-name">
                                {data.name}
                              </a>

                              <div className="d-flex align-items-center">
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={data.rating}
                                  precision={0.5}
                                  max={5}
                                  readOnly
                                />
                                <span>({data.rating})</span>
                              </div>

                              <div className="d-flex justify-content-between align-items-center my-2">
                                <div className="types__card-price">
                                  <span className="types__card-price--new">
                                    ${data.price}
                                  </span>
                                  <del className="types__card-price--old">
                                    ${data.oldPrice}
                                  </del>
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
            <div className="col-md-10 col-lg-4 mb-5 mb-xl-0">
              <h2 className="adds__title types__title m-0">recently added</h2>

              <div className="types__scroll">
                {value &&
                  value.recently.map((data) => {
                    return (
                      <div className="types__card" key={data.id}>
                        <div className="row g-0">
                          <div className="col-5 d-flex">
                            <a href="#">
                              <img
                                className="types__card-img img-fluid"
                                src={data.image}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="col-7 m-auto">
                            <div className="card-body">
                              <a href="#" className="types__card-name">
                                {data.name}
                              </a>

                              <div className="d-flex align-items-center">
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={data.rating}
                                  precision={0.5}
                                  max={5}
                                  readOnly
                                />
                                <span>({data.rating})</span>
                              </div>

                              <div className="d-flex justify-content-between align-items-center my-2">
                                <div className="types__card-price">
                                  <span className="types__card-price--new">
                                    ${data.price}
                                  </span>
                                  <del className="types__card-price--old">
                                    ${data.oldPrice}
                                  </del>
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
          </div>
        </div>
      </section>
    </>
  );
}
