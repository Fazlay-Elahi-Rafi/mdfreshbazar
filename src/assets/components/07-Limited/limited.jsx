import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import Props from "./props";

import img from "../../img/l-1.jpg";
import img2 from "../../img/l-2.jpg";
import img3 from "../../img/l-3.jpg";

export default function Limited() {
  return (
    <>
      <section className="limited">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h1 className="adds__title m-0">deals of the day</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <Props
                targetDate="Oct 25, 2030"
                targetTime="18:00:00"
                img={img}
                title="Perdue Simply Smart Organics Gluten"
                icon1={<BsStarFill className="limited__card-ul--icon" />}
                icon2={<BsStarFill className="limited__card-ul--icon" />}
                icon3={<BsStarFill className="limited__card-ul--icon" />}
                icon4={<BsStarFill className="limited__card-ul--icon" />}
                icon5={<BsStarHalf className="limited__card-ul--icon" />}
                spon="mdRafi"
                rating="(4.0)"
                new="$35.50"
                old="$15.50"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <Props
                targetDate="Oct 25, 2029"
                targetTime="17:00:00"
                img={img2}
                title="Pepperidge Farm Farmhouse Hearty White Bread"
                icon1={<BsStarFill className="limited__card-ul--icon" />}
                icon2={<BsStarFill className="limited__card-ul--icon" />}
                icon3={<BsStarFill className="limited__card-ul--icon" />}
                icon4={<BsStarFill className="limited__card-ul--icon" />}
                icon5={<BsStarHalf className="limited__card-ul--icon" />}
                spon="mdRafi"
                rating="(4.0)"
                new="$15.50"
                old="$25.50"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <Props
                targetDate="Oct 25, 2030"
                targetTime="18:00:00"
                img={img3}
                title=" Seeds of Change Organic Quinoa Farmhouse"
                icon1={<BsStarFill className="limited__card-ul--icon" />}
                icon2={<BsStarFill className="limited__card-ul--icon" />}
                icon3={<BsStarFill className="limited__card-ul--icon" />}
                icon4={<BsStarFill className="limited__card-ul--icon" />}
                icon5={<BsStarHalf className="limited__card-ul--icon" />}
                spon="mdRafi"
                rating="(4.0)"
                new="$25.50"
                old="$10.50"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
