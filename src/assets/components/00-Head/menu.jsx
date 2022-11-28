import React from "react";

import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { IoHomeOutline, IoListOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

import SmallNav from "./smallNav";

export default function Menu() {
  const dispatch = useDispatch();
  const { sideBar } = useSelector((any) => any.ClickRedu);

  return (
    <>
      <section
        className={`smallNav d-lg-none ${sideBar ? "smallNav__show" : ""}`}
      >
        <SmallNav />
        <div
          className="smallNav__background"
          onClick={() => dispatch({ type: "HIDE_SIDEBAR" })}
        ></div>
      </section>
      <section className="menu d-lg-none">
        <div className="container-fluid container-md">
          <div className="row">
            <ul className="nav__list menu__list">
              <li className="menu__list-li">
                <a className="" href="#">
                  <IoHomeOutline className="menu__list-li--icon d-block m-auto" />
                  <span className="menu__list-li--span">home</span>
                </a>
              </li>
              <li className="menu__list-li">
                <button
                  className="menu__list-li--btn"
                  onClick={() => dispatch({ type: "SHOW_SIDEBAR" })}
                >
                  <IoListOutline className="menu__list-li--icon d-block m-auto" />
                  <span className="menu__list-li--span">category</span>
                </button>
              </li>
              <li className="menu__list-li">
                <a
                  className="d-flex justify-content-start align-items-center"
                  href="#"
                >
                  <div className="middle__heart">
                    <div className="menu__heart-bg middle__heart-bg">
                      <FaHeart className="menu__list-li--icon middle__heart-bg--icon" />
                      <sup className="menu__heart-num middle__heart-bg--num">
                        0
                      </sup>
                    </div>
                    <div className="">
                      <span className="menu__list-li--span">wishlist</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="menu__list-li">
                <a
                  className="d-flex justify-content-start align-items-center"
                  href="#"
                >
                  <div className="middle__heart">
                    <div className="menu__heart-bg middle__heart-bg">
                      <FaShoppingBasket className="menu__list-li--icon middle__heart-bg--icon" />
                      <sup className="menu__heart-num middle__heart-bg--num">
                        0
                      </sup>
                    </div>
                    <div className="">
                      <span className="menu__list-li--span">cartlist</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
