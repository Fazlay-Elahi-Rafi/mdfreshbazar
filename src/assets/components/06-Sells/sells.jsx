import React, { useState } from "react";
import Slider from "react-slick";

import { BsStarFill, BsStarHalf, BsCart2 } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import Rating from "@mui/material/Rating";

import img from "../../img/sells.jpg";

import { Products } from "./data";

export default function Sells() {
  const [product, setProduct] = useState(Products);

  const filterItem = (e) => {
    const updateItem = Products.filter((curElm) => {
      return curElm.category === e;
    });

    setProduct(updateItem);
  };

  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div className="header__item-card--arrowLeft sells__arrowLeft">
        <BiLeftArrowAlt className="header__item-card--icon" onClick={onClick} />
      </div>
    );
  }
  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div className="header__item-card--arrowRight sells__arrowRight">
        <BiRightArrowAlt
          className="header__item-card--icon"
          onClick={onClick}
        />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="sells">
        <div className="container">
          <div className="row mb-4">
            <div className="d-md-flex justify-content-between align-items-end">
              <h1 className="adds__title m-md-0">todays best Sells</h1>
              <ul className="sells__ul mt-3 mt-md-0">
                <li className="sells__ul-active ms-0">all</li>
                <li onClick={() => filterItem("featured")}>featured</li>
                <li onClick={() => filterItem("popular")}>popular</li>
                <li onClick={() => filterItem("new")}>new added</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-4 d-none d-lg-block">
              <div className="card sells__card border-0">
                <img
                  src={img}
                  className="img-fluid sells__card-img"
                  alt="img"
                />
                <div className="sells__card-layer card-img-overlay d-flex align-items-center">
                  <div className="">
                    <h5 className="sells__card-title">
                      get natural vegetables to your home
                    </h5>
                    <a href="#" className="shop__item-btn btn">
                      shop now
                      <span>
                        <HiArrowNarrowRight className="shop__item-icon" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 sells__col overflow-hidden">
              <Slider {...settings}>
                {product &&
                  product.map((item) => {
                    return (
                      <div className="col-4" key={item.id}>
                        <div className="sells__card sells__card-items card">
                          <a href="#" className="sells__card-top">
                            <div className="sells__card-disc">
                              <span className="sells__card-disc--span">
                                save {item.save}
                              </span>
                            </div>
                            <div className="sells__card-icons">
                              <div className="sells__card-icons--div lh-1 w-50 text-center">
                                <AiOutlineEye />
                              </div>
                              <div className="sells__card-icons--div lh-1 w-50 text-center">
                                <AiOutlineHeart />
                              </div>
                            </div>
                            <div className="sells__card-image">
                              <img
                                src={item.image}
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                          </a>
                          <div className="sells__card-body">
                            <div className="mx-3">
                              <a href="#" className="limited__card-title">
                                {item.name}
                              </a>
                            </div>

                            <ul className="limited__card-ul sells__card-body--ul">
                              <Rating
                                name="half-rating-read"
                                defaultValue={item.rating}
                                precision={0.5}
                                max={5}
                                readOnly
                              />
                            </ul>
                            <div className="mx-3">
                              <h5 className="limited__card-by">
                                by
                                <a href="#" className="limited__card-by--span">
                                  mdRafi
                                </a>
                              </h5>
                            </div>

                            <div className="d-flex justify-content-between align-items-center my-3 mx-3">
                              <div className="limited__card-price">
                                <span className="limited__card-price--new">
                                  ${item.price}
                                </span>
                                <del className="limited__card-price--old">
                                  ${item.oldPrice}
                                </del>
                              </div>
                            </div>

                            <div className="mb-3 mx-3">
                              <div className="progress sells__card-progress">
                                <div
                                  className="progress-bar sells__card-progress--div"
                                  role="progressbar"
                                  style={{ width: `${item.sold}%` }}
                                  aria-valuenow={item.sold}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="">
                                <span className="sells__card-sold">
                                  sold {item.sold}/100
                                </span>
                              </div>
                            </div>

                            <div className="mx-3">
                              <a
                                href="#"
                                className="limited__card-btn btn d-flex justify-content-center"
                              >
                                <span>
                                  <BsCart2 className="limited__card-btn--icon" />
                                </span>
                                add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
