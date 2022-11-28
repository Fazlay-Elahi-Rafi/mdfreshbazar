import React from "react";

import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="nav d-none d-lg-block">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 d-flex justify-content-between align-items-center nav__border">
            <div className="col-5 col-xl-4">
              <ul className="nav__list">
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
            <div className="col-7 col-xl-6 d-flex justify-content-end">
              <div className="col-9 d-flex justify-content-between">
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
                    <span className="nav__text">fazlayrafi2001@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
