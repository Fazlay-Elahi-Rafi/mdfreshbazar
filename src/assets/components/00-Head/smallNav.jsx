import React from "react";

import { useDispatch } from "react-redux";

import { IoCloseSharp } from "react-icons/io5";
import { GrTextAlignRight } from "react-icons/gr";

import logo from "../../img/logo.png";

export default function SmallNav() {
  const dispatch = useDispatch();
  return (
    <div className="smallNav__body">
      <div className="container">
        <div className="row align-items-center mb-3 smallNav__body-head">
          <div className="col-5 col-sm-4">
            <div className="d-flex">
              <div className="">
                <GrTextAlignRight className="smallNav__body-head--icon" />
              </div>
              <div className="">
                <h5 className="smallNav__body-head--text">category</h5>
              </div>
            </div>
          </div>
          <div className="col-7 col-sm-8 smallNav__close">
            <div className="smallNav__close-div">
              <IoCloseSharp
                onClick={() => dispatch({ type: "HIDE_SIDEBAR" })}
                className="smallNav__close-icon d-flex justify-content-end"
              />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="">
            <ul className="smallNav__ul">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">category</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="smallNav__footer">
          <h5 className="smallNav__footer--text">
            design by
            <span className="text-uppercase text-danger mx-2">md.rafi</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
