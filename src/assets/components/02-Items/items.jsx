import React from "react";

import Slider from "react-slick";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import item from "../../img/items-01.png";
import item2 from "../../img/items-02.png";
import item3 from "../../img/items-03.png";
import item4 from "../../img/items-05.png";

import Props from "./props";

export default function items() {
  
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div className="header__item-card--arrowLeft item__arrowLeft">
        <BiLeftArrowAlt className="header__item-card--icon" onClick={onClick} />
      </div>
    );
  }
  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div className="header__item-card--arrowRight item__arrowRight">
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
    slidesToShow: 3,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="item">
      <div className="container">
        <div className="row">
          <Slider {...settings} className="">
            <div className="col-3 d-flex justify-content-between align-items-center item__body mx-3">
              <Props
                img={item}
                title="everyday fresh with our product"
                text="go to supplier"
              />
            </div>

            <div className="col-3 d-flex justify-content-between align-items-center item__body2 mx-3">
              <Props
                img={item2}
                title="get 50% off at all vegetable"
                text="go to supplier"
              />
            </div>
            <div className="col-3 d-flex justify-content-between align-items-center item__body3 mx-3">
              <Props
                img={item3}
                title="100% guaranteed all fresh products"
                text="go to supplier"
              />
            </div>
            <div className="col-3 d-flex justify-content-between align-items-center item__body4 mx-3">
              <Props
                img={item4}
                title="special grocery sale of this month"
                text="go to supplier"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
