import React from "react";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export default function Props(props) {
  return (
    <>
      <div className="d-flex align-items-center">
        <img
          className="img-fluid view__desc-user"
          src={props.user}
          alt="user"
        />

        <div className="">
          <Link to={props.link} className="view__desc-name">
            {props.name}
          </Link>
          <p className="view__desc-date">{props.date}</p>
        </div>
      </div>

      <div className="">
        <Rating
          name="half-rating-read"
          defaultValue={props.starValue}
          precision={0.5}
          max={5}
          readOnly
        />

        <p className="view__para view__desc-para">{props.desc}</p>

        <div className="d-sm-flex">
          <input
            className="view__desc-inp form-control"
            type="text"
            placeholder="Reply..."
          />
          <button className="view__desc-btn btn d-flex d-sm-inline">
            reply
          </button>
        </div>
      </div>
    </>
  );
}
