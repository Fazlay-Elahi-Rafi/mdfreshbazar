import React from "react";

import img from "../../img/add-03.png";
import img2 from "../../img/add-04.png";
import img3 from "../../img/add-05.png";

import Props from "./props";

export default function ShopNow() {
  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0 shop__item">
            <Props title="everyday get fresh product" img={img} />
          </div>
          <div className="col-md-6 col-lg-4 shop__item">
            <Props title="the best organic products online" img={img2} />
          </div>
          <div className="col-lg-4 shop__item d-none d-lg-block">
            <Props title="make your breakfast healthy" img={img3} />
          </div>
        </div>
      </div>
    </section>
  );
}
