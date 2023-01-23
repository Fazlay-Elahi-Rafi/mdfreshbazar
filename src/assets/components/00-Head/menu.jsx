import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { IoHomeOutline, IoListOutline } from "react-icons/io5";

import SmallNav from "./smallNav";

export default function Menu() {
  const dispatch = useDispatch();
  const { sideBar } = useSelector((any) => any.ClickRedu);
  const { total_items } = useSelector((state) => state.CartReducer);

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
                <Link to="/" className="">
                  <IoHomeOutline className="menu__list-li--icon d-block m-auto" />
                  <span className="menu__list-li--span">home</span>
                </Link>
              </li>
              <li className="menu__list-li">
                <button
                  className="menu__list-li--btn"
                  onClick={() => dispatch({ type: "SHOW_SIDEBAR" })}
                >
                  <IoListOutline className="menu__list-li--icon d-block m-auto" />
                  <span className="menu__list-li--span">menu</span>
                </button>
              </li>
              <li className="menu__list-li">
                <Link
                  to="/wishlist"
                  className="d-flex justify-content-start align-items-center"
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
                </Link>
              </li>
              <li className="menu__list-li">
                <Link
                  to="/cart"
                  className="d-flex justify-content-start align-items-center"
                >
                  <div className="middle__heart">
                    <div className="menu__heart-bg middle__heart-bg">
                      <FaShoppingBasket className="menu__list-li--icon middle__heart-bg--icon" />
                      <sup className="menu__heart-num middle__heart-bg--num">
                        {total_items}
                      </sup>
                    </div>
                    <div className="">
                      <span className="menu__list-li--span">cartlist</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
