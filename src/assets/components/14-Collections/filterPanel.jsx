import React from "react";
import { Checkbox, Slider } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function FilterPanel({
  selectedCategory, //--> Category
  changeCheckedCate, //--> Category
  selectedRating, //--> Rating
  selectRating, //--> Rating
  types, //--> Type
  changeChecked, //--> Type
  selectedWeight, //--> Weight
  changeCheckedWeight, //--> Weight
  selectedPrice, //--> Price
  changePrice, //--> Price
}) {
  return (
    <>
      <h3 className="collection__filter-title">filter</h3>

      <div className="">
        <h4 className="collection__filter-text">category</h4>
        <ul className="collection__filter-ul">
          {selectedCategory.map((cate) => {
            return (
              <li className="collection__filter-ul--nam" key={cate.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ padding: "0", color: "#2ea26d" }}
                      size="small"
                      checked={cate.checked}
                      onChange={() => changeCheckedCate(cate.id)}
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                  }
                  label={cate.label}
                />
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
              value={selectedPrice}
              onChange={changePrice}
              valueLabelDisplay="auto"
              min={1}
              max={100}
            />
          </li>

          <li></li>
        </ul>
      </div>

      <div className="">
        <h4 className="collection__filter-text">type</h4>
        <ul className="collection__filter-ul">
          {types.map((type) => {
            return (
              <li key={type.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ padding: "0", color: "#2ea26d" }}
                      size="small"
                      checked={type.checked}
                      onChange={() => changeChecked(type.id)}
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                  }
                  label={type.label}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="">
        <h4 className="collection__filter-text">weight</h4>
        <ul className="collection__filter-ul">
          {selectedWeight.map((sz) => {
            return (
              <li key={sz.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ padding: "0", color: "#2ea26d" }}
                      size="small"
                      checked={sz.checked}
                      onChange={() => changeCheckedWeight(sz.id)}
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                  }
                  label={sz.size}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="">
        <h4 className="collection__filter-text">rating</h4>
        <ul className="collection__filter-ul">
          {selectedRating.map((star) => {
            {
              return (
                <li key={star.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ padding: "0", color: "#2ea26d" }}
                        size="small"
                        checked={star.checked}
                        onChange={() => selectRating(star.id)}
                        inputProps={{
                          "aria-label": "checkbox with small size",
                        }}
                      />
                    }
                    label={star.star}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
