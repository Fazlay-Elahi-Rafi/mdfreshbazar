import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Props(props) {
  return (
    <>
      <div className="shop__item-bg d-flex justify-content-between align-items-center">
        <div className="col-7">
          <h2 className="shop__item-title">{props.title}</h2>
          <a href="#" className="shop__item-btn btn">
            shop now
            <span>
              <HiArrowNarrowRight className="shop__item-icon" />
            </span>
          </a>
        </div>
        <div className="col-5">
          <img className="img-fluid" src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}
