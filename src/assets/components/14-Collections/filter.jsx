import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BsGrid } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GrFilter } from "react-icons/gr";

import { Size, Type, Rating, Category } from "./filter_data";

import FilterPanel from "./filterPanel";
import OutPut from "./body";
import SearchBar from "./search";
import Sort from "./sort";
import NotMatch from "./notMatch";

import { applyFilter } from "./applyFilter";

import img from "../../img/header-bg04.png";

const Filter = ({ product }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((any) => any.ClickRedu);

  const [productList, setProductList] = useState(product);

  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(Rating);
  const [selectedCategory, setSelectedCategory] = useState(Category);
  const [selectedWeight, setSelectedWeight] = useState(Size);
  const [type, setType] = useState(Type);

  const [resultsFound, setResultsFound] = useState(true);
  const [isActive, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // ------> Rating__Checked Function
  const handleChangeRating = (id) => {
    const ratingStateList = selectedRating;
    const changeCheckedRating = ratingStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectedRating(changeCheckedRating);
  };

  // ------> Type__Checked Function
  const handleChangeCheckedType = (id) => {
    const typeState = type;
    const changeCheckedType = typeState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setType(changeCheckedType);
  };

  // ------> Category__Checked Function
  const handleChangeCate = (id) => {
    const categoryStateList = selectedCategory;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectedCategory(changeCheckedCategory);
  };

  // ------> Weight__Checked Function
  const handleChangeWeight = (id) => {
    const weightList = selectedWeight;
    const changeCheckedWeight = weightList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setSelectedWeight(changeCheckedWeight);
  };

  // ------> Price__Checked Function
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  useEffect(() => {
    applyFilter({
      product,
      selectedRating,
      type,
      selectedCategory,
      selectedWeight,
      searchInput,
      selectedPrice,
      setProductList,
      setResultsFound,
    });
  }, [
    selectedRating,
    type,
    searchInput,
    selectedPrice,
    selectedCategory,
    selectedWeight,
    product,
  ]);

  return (
    <>
      <div
        className={` ${filter ? "collection__filter-panel--background" : ""}`}
        onClick={() => dispatch({ type: "HIDE_FILTER" })}
      ></div>

      <div
        className={`col-10 col-sm-6 col-md-5 col-lg-3 collection__filter ${
          filter
            ? "d-lg-block collection__filter-panel"
            : "collection__filter-panel--hide"
        }`}
      >
        <div className={`${filter ? "collection__filter-panel--body" : ""}`}>
          <FilterPanel
            selectRating={handleChangeRating}
            selectedRating={selectedRating}
            types={type}
            changeChecked={handleChangeCheckedType}
            selectedCategory={selectedCategory}
            changeCheckedCate={handleChangeCate}
            selectedWeight={selectedWeight}
            changeCheckedWeight={handleChangeWeight}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
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
            <div
              className="d-flex d-lg-none"
              onClick={() => dispatch({ type: "SHOW_FILTER" })}
            >
              <GrFilter className="collection__bar-i m-0" />
              <h4 className="collection__filter-ul--name ps-2">filter</h4>
            </div>

            <div className="collection__bar-icons text-end text-sm-start">
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

            <div className="col-12 col-md-5 col-xl-6 mt-4 mt-md-0 collection__bar-search">
              <SearchBar
                value={searchInput}
                changeInput={(e) => setSearchInput(e.target.value)}
              />
            </div>

            <div className="collection__bar-sort text-sm-end text-start">
              <Sort />
            </div>
          </div>
        </div>

        <div className="row px-2 px-sm-0">
          {resultsFound ? (
            <>
              {productList.map((product, index) => (
                <OutPut key={product.id} list={product} isActive={isActive} />
              ))}
            </>
          ) : (
            <>
              <NotMatch value={searchInput} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
