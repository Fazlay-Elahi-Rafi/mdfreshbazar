import React from "react";
import { Link } from "react-router-dom";

import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Head from "./head";
import Menu from "./menu";
import Middle from "./middle";

export default function Navbar() {
  return (
    <>
      <Head />
      <Middle />
      <nav className="nav d-none d-lg-block">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 d-flex justify-content-between align-items-center nav__border">
              <div className="col-md-6 col-xl-5">
                <ul className="nav__list">
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <Link to="/products">product</Link>
                  </li>
                  <li>
                    <Link to="/blog">blog</Link>
                  </li>
                  <li>
                    <div className="nav__list-dropdown">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="btn dropdown-toggle nav__list-dropdown--btn"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          page
                        </a>
                        <ul
                          className="dropdown-menu nav__list-dropdown--ul"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link to="/cart" className="dropdown-item" href="#">
                              cart
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/wishlist"
                              className="dropdown-item"
                              href="#"
                            >
                              wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to="*" className="dropdown-item" href="#">
                              404
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 col-xl-6 d-flex justify-content-end">
                <div className="col-12 col-xl-9 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsTelephoneForward className="nav__icon" />
                    <div className="">
                      <small className="nav__small">call us</small>
                      <span className="nav__text">(+880)1828481501</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <MdOutlineAlternateEmail className="nav__icon" />
                    <div className="">
                      <small className="nav__small">email us</small>
                      <span className="nav__text">
                        fazlayrafi2001@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Menu />
    </>
  );
}
