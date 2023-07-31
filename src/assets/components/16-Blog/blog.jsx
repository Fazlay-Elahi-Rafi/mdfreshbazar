import React, { useState, useEffect } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaComments,
  FaShareAlt,
} from "react-icons/fa";
import { CgReadme } from "react-icons/cg";
import { BsGrid } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

import BlogNews from "./blogNews";
import BlogWidget from "./blogWidget";

import author from "../../img/myself.jpg";

export default function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__author">
                <div className="blog__author-head">
                  <div className="blog__author-avatar">
                    <img className="img-fluid" src={author} alt="author" />
                  </div>

                  <div className="">
                    <h3 className="blog__author-name">fazlay elahi rafi</h3>
                    <h5 className="blog__author-mail">
                      fazlayrafi2001@gmail.com
                    </h5>

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
                        <li>
                          <a href="#">
                            <FaPinterestP className="footer__social-icon footer__social-pin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="blog__author-p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sunt tenetur fugiat pariatur mollitia tempore saepe,
                    distinctio incidunt in odio, consectetur officia! Eius fugit
                    expedita, ducimus fuga molestias dolores dolorem
                    perferendis.
                  </p>
                </div>

                <div className="">
                  <ul className="blog__author-list">
                    <li>
                      <CgReadme className="blog__author-list--i" />
                      <span>Total Blog 25</span>
                    </li>
                    <li>
                      <FaComments className="blog__author-list--i" />
                      Total Comment 100
                    </li>
                    <li>
                      <FaShareAlt className="blog__author-list--i" />
                      Total Share 50
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex justify-content-between blog__sort">
                <div className="d-flex align-items-center">
                  <label className="blog__sort-label d-none d-sm-block ms-0">
                    show:
                  </label>
                  <div className="">
                    <select className="blog__sort-select form-select">
                      <option value="12">12</option>
                      <option value="2">24</option>
                      <option value="3">48</option>
                      <option value="4">50</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="d-none d-sm-block">
                    <BsGrid className="blog__sort-i" />
                    <AiOutlineUnorderedList className="blog__sort-i blog__sort-i--active" />
                  </div>
                  <label className="blog__sort-label d-none d-sm-block">
                    short by:
                  </label>
                  <div className="">
                    <select className="blog__sort-select form-select">
                      <option value="default">default</option>
                      <option value="recent">recent</option>
                      <option value="featured">featured</option>
                      <option value="upcoming">upcoming</option>
                    </select>
                  </div>
                </div>
              </div>

              <BlogNews />
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <BlogWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
