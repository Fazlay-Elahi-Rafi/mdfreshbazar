import React from "react";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Props from "./props";

import img from "../../img/clients-1.jpg";
import img2 from "../../img/clients-2.jpg";
import img3 from "../../img/clients-3.jpg";
import img4 from "../../img/clients-4.jpg";

export default function Feedback() {
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
      <div className="feedback__card-left">
        <IoIosArrowBack className="feedback__card-icon" onClick={onClick} />
      </div>
    );
  }
  function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
      <div className="feedback__card-right">
        <IoIosArrowForward className="feedback__card-icon" onClick={onClick} />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    centerMode: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className="feedback">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 mb-4">
            <h1 className="adds__title m-0">customer's feedback</h1>
          </div>
        </div>

        <div className="row">
          <Slider {...settings}>
            <Props
              name="md.rafi"
              img={img}
              rating={4}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia facere aspernatur praesentium? Quis totam cum deleniti velit voluptatibus, quam inventore eligendi consectetur eos veritatis modi non deserunt maiores doloremque enim."
            />
            <Props
              name="fazlay rafi"
              img={img2}
              rating={3}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia facere aspernatur praesentium? Quis totam cum deleniti velit voluptatibus, quam inventore eligendi consectetur eos veritatis modi non deserunt maiores doloremque enim."
            />
            <Props
              name="fazlay elahi rafi"
              img={img3}
              rating={4}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia facere aspernatur praesentium? Quis totam cum deleniti velit voluptatibus, quam inventore eligendi consectetur eos veritatis modi non deserunt maiores doloremque enim."
            />
            <Props
              name="fazlay elahi rafi"
              img={img4}
              rating={5}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia facere aspernatur praesentium? Quis totam cum deleniti velit voluptatibus, quam inventore eligendi consectetur eos veritatis modi non deserunt maiores doloremque enim."
            />

          </Slider>
        </div>
      </div>
    </section>
  );
}
