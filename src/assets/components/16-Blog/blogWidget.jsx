import React, { useState } from "react";

import { ImSearch } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import BlogData from "./blogData";

export default function BlogWidget() {
  const [data, setData] = useState(BlogData);
  return (
    <>
      <div className="blog__widget">
        <div className="blog__widget-search">
          <h3 className="blog__widget-title">search</h3>

          <div className="d-flex align-items-center">
            <input
              className="form-control blog__widget-inp"
              type="text"
              placeholder="Search Blogs"
            />
            <ImSearch className="blog__widget-i" />
          </div>
        </div>
      </div>

      <div className="blog__widget">
        <div className="blog__widget-feeds">
          <h3 className="blog__widget-title">popular feeds</h3>

          <div className="">
            <ul className="blog__widget-list">
              {data &&
                data.slice(10, 14).map((info) => {
                  return (
                    <li className="blog__widget-list--item" key={info.id}>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src={info.image}
                          alt={info.image}
                        />
                      </a>
                      <div className="blog__widget-list--content">
                        <a className="blog__widget-list--link" href="#">
                          {info.name}
                        </a>
                        <span className="blog__widget-list--spn">
                          {info.date}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="blog__widget">
        <div className="blog__widget-feeds">
          <h3 className="blog__widget-title">categories</h3>

          <div className="">
            <ul className="blog__widget-list">
              {data &&
                data.slice(0, 6).map((info) => {
                  return (
                    <li key={info.id}>
                      <div className="">
                        <a
                          className="blog__widget-list--link blog__widget-list--cate"
                          href="#"
                        >
                          <span className="">{info.category}</span>
                          <span className="blog__widget-list--cate---num">
                            {info.num}
                          </span>
                        </a>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="blog__widget">
        <div className="blog__widget-feeds">
          <h3 className="blog__widget-title">popular tags</h3>

          <div className="">
            <ul className="blog__widget-list blog__widget-tag--list">
              {data &&
                data.slice(0, 10).map((info) => {
                  return (
                    <li key={info.id}>
                      <div className="">
                        <a
                          className="blog__widget-list--cate"
                          href="#"
                        >
                          {info.tag}
                        </a>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="blog__widget">
        <div className="blog__widget-feeds">
          <h3 className="blog__widget-title">follow us</h3>

          <div className="">
            <ul className="footer__social footer__ul d-flex">
              <li>
                <a href="#">
                  <FaFacebookF className="footer__social-icon footer__social-fb" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="footer__social-icon footer__social-tw" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="footer__social-icon footer__social-ins" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="footer__social-icon footer__social-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
