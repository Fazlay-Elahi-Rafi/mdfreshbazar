import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sort() {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.FilterReducer);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  return (
    <>
      <select
        className="collection__bar-select"
        name="sort"
        id="sort"
        value={sort}
        onChange={updateSort}
      >
        <option value="price-lowest">price: low to high</option>
        <option value="price-highest">price: high to low</option>
        <option value="name-a">name (a-z)</option>
        <option value="name-z">name (z-a)</option>
      </select>
    </>
  );
}
