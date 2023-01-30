import React from "react";

const SearchBar = ({ value, changeInput }) => (
  <>
    <input
      className="form-control middle__search-inp"
      type="text"
      placeholder="Enter Product Name"
      value={value}
      onChange={changeInput}
    />
  </>
);

export default SearchBar;
