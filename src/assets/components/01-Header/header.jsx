import React from "react";

import Slider from "react-slick";

import { IoIosArrowForward } from "react-icons/io";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import bg from "../../img/header-bg01.png";
import bg2 from "../../img/header-bg02.png";
import bg3 from "../../img/header-bg03.png";
import add from "../../img/add-01.png";
import add2 from "../../img/add-02.png";
import Props from "./props";

export default function Header() {
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="header__item-card--slideBtn header__item-card--arrowLeft"
        onClick={onClick}
      >
        <BiLeftArrowAlt className="header__item-card--icon" />
      </div>
    );
  }
  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="header__item-card--slideBtn header__item-card--arrowRight"
        onClick={onClick}
      >
        <BiRightArrowAlt className="header__item-card--icon" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Slider {...settings} className="col-12 col-lg-8 header__item">
            <div className="card header__item-card">
              <Props
                img={bg}
                img2={bg}
                title="order now free for 24 hour"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui! Magni rem ipsam aspernatur ipsa aliquid aperiam perspiciatis. Earum obcaecati voluptates nisi beatae asperiores ea facilis enim culpa maiores atque?"
              />
            </div>
            <div className="card header__item-card">
              <Props
                img={bg2}
                img2={bg2}
                title="order now free for 24 hour"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui! Magni rem ipsam aspernatur ipsa aliquid aperiam perspiciatis. Earum obcaecati voluptates nisi beatae asperiores ea facilis enim culpa maiores atque?"
              />
            </div>
            <div className="card header__item-card">
              <Props
                img={bg3}
                img2={bg3}
                title="order now free for 24 hour"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui! Magni rem ipsam aspernatur ipsa aliquid aperiam perspiciatis. Earum obcaecati voluptates nisi beatae asperiores ea facilis enim culpa maiores atque?"
              />
            </div>
          </Slider>

          <div className="col-md-9 col-lg-4 header__add mt-4 mt-lg-0">
            <div className="col-12 d-flex align-items-center header__add-bg mb-4">
              <div className="col-7 px-3">
                <small className="header__add-text">fresh vegetable</small>
                <h4 className="header__add-title">green cauliflower</h4>
                <p className="header__add-para">start from $10</p>
                <button className="btn header__add-btn">
                  show now <IoIosArrowForward />
                </button>
              </div>

              <div className="col-5">
                <img src={add} className="img-fluid" alt="..." />
              </div>
            </div>
            <div className="col-12 d-flex align-items-center header__add-bg2">
              <div className="col-5">
                <img src={add2} className="img-fluid" alt="..." />
              </div>
              <div className="col-7 px-3 text-end text-xl-start">
                <small className="header__add-text">fresh vegetable</small>
                <h4 className="header__add-title">
                  Fresh Organic Green Chilis
                </h4>
                <p className="header__add-para">start from $10</p>
                <button className="btn header__add-btn">
                  show now <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
