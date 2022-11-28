import React from "react";
import { BsCart2 } from "react-icons/bs";
import Timer from "./timer";

export default function Props(props) {
  return (
    <>
      <div className="card limited__card border-0">
        <img
          src={props.img}
          className="img-fluid limited__card-img"
          alt="fruits img"
        />
        <div className="limited__card-body">
          <Timer targetDate={props.targetDate} targetTime={props.targetTime} />

          <div className="">
            <a href="#" className="limited__card-title">
              {props.title}
            </a>

            <ul className="limited__card-ul">
              <li className="limited__card-ul--li">{props.icon1}</li>
              <li className="limited__card-ul--li">{props.icon2}</li>
              <li className="limited__card-ul--li">{props.icon3}</li>
              <li className="limited__card-ul--li">{props.icon4}</li>
              <li className="limited__card-ul--li">{props.icon5}</li>
              <li className="limited__card-ul--li mx-1">
                <span>{props.rating}</span>
              </li>
            </ul>
            <div className="mt-2">
              <h5 className="limited__card-by">
                by
                <a href="#" className="limited__card-by--span">
                  {props.spon}
                </a>
              </h5>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="limited__card-price">
                <span className="limited__card-price--new">{props.new}</span>
                <del className="limited__card-price--old">{props.old}</del>
              </div>
              <div className="">
                <a href="#" className="limited__card-btn btn">
                  <span>
                    <BsCart2 className="limited__card-btn--icon" />
                  </span>
                  add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
