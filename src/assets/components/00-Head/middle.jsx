import React from "react";

import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

import logo from "../../img/logo.png";
import user from "../../img/user.jpg";

export default function Middle() {
  return (
    <section className="middle">
      <div className="container">
        {/* Head One */}
        <div className="row align-items-center d-none d-md-flex">
          <div className="col-2 p-md-0">
            <a href="#">
              <img className="img-fluid w-50" src={logo} alt="logo" />
            </a>
          </div>

          <div className="col-2 p-md-0">
            <div className="middle__dropdown">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle middle__dropdown-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="img-fluid middle__dropdown-img"
                    src={user}
                    alt="user"
                  />
                </button>
                <ul
                  className="dropdown-menu middle__dropdown-ul"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-6 p-md-0">
            <div className="middle__search">
              <div className="middle__search-position">
                <input
                  className="form-control middle__search-inp"
                  type="text"
                  placeholder="Search..."
                />

                <ImSearch className="middle__search-icon" />
              </div>
            </div>
          </div>

          <div className="col-2 p-md-0">
            <div className="d-flex justify-content-end align-items-center">
              <div className="middle__heart mx-4">
                <div className="middle__heart-bg">
                  <FaHeart className="middle__heart-bg--icon" />
                  <sup className="middle__heart-bg--num">0</sup>
                </div>
              </div>
              <div className="middle__heart">
                <div className="middle__heart-bg">
                  <FaShoppingBasket className="middle__heart-bg--icon" />
                  <sup className="middle__heart-bg--num">0</sup>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Head Small Device */}
        <div className="row d-md-none justify-content-between align-items-center">
          <div className="col-3">
            <div className="middle__dropdown">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle middle__dropdown-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="img-fluid middle__dropdown-img"
                    src={user}
                    alt="user"
                  />
                </button>
                <ul
                  className="dropdown-menu middle__dropdown-ul"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-5 text-center p-0">
            <a href="#">
              <img className="img-fluid w-50" src={logo} alt="logo" />
            </a>
          </div>

          <div className="col-3">
            <div className="d-flex justify-content-end align-items-center">
              <div className="middle__heart">
                <div
                  className="middle__heart-bg"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ImSearch className="middle__heart-bg--icon" />
                </div>
                <ul
                  className="dropdown-menu middle__search-ul col-12"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <div className="middle__search">
                    <div className="middle__search-position">
                      <input
                        className="form-control middle__search-inp"
                        type="text"
                        placeholder="Search..."
                      />

                      <ImSearch className="middle__search-icon" />
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
