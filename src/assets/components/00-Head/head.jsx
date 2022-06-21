import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Head() {
  return (
    <section className="head">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-xl-5 mb-4 mb-lg-0">
            <h4 className="head__title text-center text-lg-start">
              Welcome to MD.RAFI's shop in Your Dream Online Store!
            </h4>
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 justify-content-center justify-content-sm-start justify-content-lg-center d-flex">
            <div className="d-flex align-items-center head__select-border">
              <div className="mx-2 d-flex">
                <BiWorld className="head__select-icon" />
              </div>

              <select className="head__select">
                <option className="head__select-opt">english</option>
                <option className="head__select-opt" value="1">
                  bangla
                </option>
                <option className="head__select-opt" value="2">
                  uk
                </option>
              </select>
            </div>

            <div className="d-flex align-items-center px-3 px-lg-2 px-xl-3">
              <div className="mx-2 d-flex">
                <BsCurrencyDollar className="head__select-icon" />
              </div>

              <select className="head__select">
                <option className="head__select-opt">dollar</option>
                <option className="head__select-opt" value="1">
                  taka
                </option>
                <option className="head__select-opt" value="2">
                  pound
                </option>
              </select>
            </div>
          </div>

          <div className="col-6 col-lg-3 col-xl-4 text-end d-none d-sm-block">
            <ul className="head__ul">
              <li className="head__ul-li">
                <a className="head__ul-link" href="#">
                  offer
                </a>
              </li>
              <li className="head__ul-li">
                <a className="head__ul-link" href="#">
                  help
                </a>
              </li>
              <li className="head__ul-li">
                <a className="head__ul-link" href="#">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
