import React from "react";

import Slider from "react-slick";

import { TbDiscount2 } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import bg from "../../img/header-bg01.png";
import bg2 from "../../img/header-bg02.png";
import bg3 from "../../img/header-bg03.png";
import add from "../../img/add-01.png";
import add2 from "../../img/add-02.png";

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
              <div className="row justify-content-center align-items-center">
                <div className="col-10 col-sm-9 p-1 d-md-none d-block">
                  <img src={bg} className="img-fluid" alt="item" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="header__item-layer">
                      <div className="">
                        <h1 className="header__item-title">
                          order now free for 24 hour
                        </h1>
                        <p className="header__item-para">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Modi, qui! Magni rem ipsam aspernatur ipsa
                          aliquid aperiam perspiciatis. Earum obcaecati
                          voluptates nisi beatae asperiores ea facilis enim
                          culpa maiores atque?
                        </p>

                        <div className="col-9 col-sm-8 col-md-12 d-lg-flex justify-content-between">
                          <div className="header__item-button mb-3 mb-lg-0">
                            <BsCart4 className="header__item-button--icon" />
                            <button className="btn header__item-button--btn">
                              order now
                            </button>
                          </div>
                          <div className="header__item-button header__item-button2">
                            <TbDiscount2 className="header__item-button--icon header__item-button2--icon2" />
                            <button className="btn header__item-button--btn header__item-button2--btn2">
                              shop now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 p-1 d-none d-md-block">
                  <img src={bg} className="img-fluid" alt="item" />
                </div>
              </div>
            </div>
            <div className="card header__item-card">
              <div className="row justify-content-center align-items-center">
                <div className="col-10 col-sm-9 col-md-5 p-1">
                  <img src={bg2} className="img-fluid" alt="item" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="header__item-layer">
                      <div className="">
                        <h1 className="header__item-title">
                          order now free for 24 hour
                        </h1>
                        <p className="header__item-para">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Modi, qui! Magni rem ipsam aspernatur ipsa
                          aliquid aperiam perspiciatis. Earum obcaecati
                          voluptates nisi beatae asperiores ea facilis enim
                          culpa maiores atque?
                        </p>

                        <div className="col-9 col-sm-8 col-md-12 d-lg-flex justify-content-between">
                          <div className="header__item-button mb-3 mb-lg-0">
                            <BsCart4 className="header__item-button--icon" />
                            <button className="btn header__item-button--btn">
                              order now
                            </button>
                          </div>
                          <div className="header__item-button header__item-button2">
                            <TbDiscount2 className="header__item-button--icon header__item-button2--icon2" />
                            <button className="btn header__item-button--btn header__item-button2--btn2">
                              shop now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card header__item-card">
              <div className="row justify-content-center align-items-center">
                <div className="col-10 col-sm-9 p-1 d-md-none d-block">
                  <img src={bg3} className="img-fluid" alt="item" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="header__item-layer">
                      <div className="">
                        <h1 className="header__item-title">
                          order now free for 24 hour
                        </h1>
                        <p className="header__item-para">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Modi, qui! Magni rem ipsam aspernatur ipsa
                          aliquid aperiam perspiciatis. Earum obcaecati
                          voluptates nisi beatae asperiores ea facilis enim
                          culpa maiores atque?
                        </p>

                        <div className="col-9 col-sm-8 col-md-12 d-lg-flex justify-content-between">
                          <div className="header__item-button mb-3 mb-lg-0">
                            <BsCart4 className="header__item-button--icon" />
                            <button className="btn header__item-button--btn">
                              order now
                            </button>
                          </div>
                          <div className="header__item-button header__item-button2">
                            <TbDiscount2 className="header__item-button--icon header__item-button2--icon2" />
                            <button className="btn header__item-button--btn header__item-button2--btn2">
                              shop now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 p-1 d-none d-md-block">
                  <img src={bg3} className="img-fluid" alt="item" />
                </div>
              </div>
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
