import React, { useState } from "react";
import Slider from "react-slick";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import Data from "./data";

export default function Category() {
  const [data, setData] = useState(Data);

  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div className="category__arrowRight category__cls" onClick={onClick}>
        <BiRightArrowAlt className="header__item-card--icon" />
      </div>
    );
  }
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div className="category__arrowLeft category__cls" onClick={onClick}>
        <BiLeftArrowAlt className="header__item-card--icon" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 7,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="category">
        <div className="container">
          <div className="row mb-4">
            <h1 className="adds__title">shop by Category</h1>
          </div>

          <div className="row">
            <Slider {...settings}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="category__card">
                      <a href="#" className="category__card-bg text-center">
                        <div className="">
                          <img
                            className="category__card-img img-fluid m-auto"
                            src={item.img}
                            alt="img"
                          />
                        </div>
                        <div className="">
                          <h3 className="category__card-text">
                            {item.name} <br /> {item.subNam}
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
