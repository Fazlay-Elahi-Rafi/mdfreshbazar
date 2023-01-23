import React, { useState } from "react";
import { InputNumber, Slider, Checkbox } from "antd";

import { AiOutlineMinus } from "react-icons/ai";

import { Size, Type } from "./filter_data";

export default function Filter() {
  const [filter, setFilter] = useState({ Size, Type });

  const [minPrice, setMinPrice] = useState(300);
  const [maxPrice, setMaxPrice] = useState(2000);

  const getSizeFun = (list) => {
    console.log("Size = ", list);
  };

  const getTypeFun = (checkedValues) => {
    console.log("Type = ", checkedValues);
  };

  const getAvailFun = (checkedValues) => {
    console.log("Available = ", checkedValues);
  };


  return (
    <>
      <div className="collection__filter">
        <h3 className="collection__filter-title">filter</h3>

        <div className="">
          <h4 className="collection__filter-text">size</h4>
          <ul className="collection__filter-ul">
            {filter.Size.map((sz) => {
              return (
                <li key={sz.id}>
                  <Checkbox.Group onChange={getSizeFun}>
                    <Checkbox
                      className="collection__filter-ul--name"
                      value={sz.size}
                    >
                      {sz.size}
                    </Checkbox>
                  </Checkbox.Group>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="collection__filter-text">by price</h4>
          <ul className="collection__filter-ul">
            <li>
              <Slider
                className="collection__filter-range"
                range
                min={1}
                max={2000}
                value={[minPrice, maxPrice]}
                onChange={([min, max]) => {
                  setMinPrice(min);
                  setMaxPrice(max);
                }}
              />

              <div className="d-flex justify-content-center">
                <div className="">
                  <InputNumber
                    className="collection__filter-inp"
                    min={1}
                    max={2000}
                    value={minPrice}
                    onChange={(e) => {
                      if (e >= 0) {
                        setMinPrice(e);
                      }
                    }}
                  />
                  <label className="collection__filter-inp--label">Min</label>
                </div>

                <div className="collection__filter-minus">
                  <AiOutlineMinus className="collection__filter-minus--i" />
                </div>

                <div className="">
                  <InputNumber
                    className="collection__filter-inp"
                    min={1}
                    max={2000}
                    value={maxPrice}
                    onChange={(e) => {
                      if (e >= 0) {
                        setMaxPrice(e);
                      }
                    }}
                  />
                  <label className="collection__filter-inp--label">Max</label>
                </div>
              </div>
            </li>

            <li></li>
          </ul>
        </div>

        <div className="">
          <h4 className="collection__filter-text">type</h4>
          <ul className="collection__filter-ul">
            {filter.Type.map((typ) => {
              return (
                <li key={typ.id}>
                  <Checkbox.Group onChange={getTypeFun}>
                    <Checkbox
                      className="collection__filter-ul--name"
                      value={typ.typs}
                    >
                      {typ.typs}
                    </Checkbox>
                  </Checkbox.Group>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <h4 className="collection__filter-text">availability</h4>
          <ul className="collection__filter-ul">
            <li>
              <Checkbox.Group className="d-block" onChange={getAvailFun}>
                <div className="mb-2">
                  <Checkbox
                    className="collection__filter-ul--name"
                    value="in stock"
                  >
                    in stock
                  </Checkbox>
                </div>
                <div className="">
                  <Checkbox
                    className="collection__filter-ul--name"
                    value="out of stock"
                  >
                    out of stock
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
