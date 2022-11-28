import React from "react";

import icon from "../../img/i-4.png";
import icon2 from "../../img/i-5.png";
import icon3 from "../../img/i-6.png";
import icon4 from "../../img/i-7.png";

import Props from "./props";

export default function Service() {
  return (
    <>
      <section className="service">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 mb-4">
              <Props
                icon={icon}
                text="best prices & offers"
                para="order $50 & more"
              />
            </div>
            <div className="col-sm-6 col-xl-3 mb-4">
              <Props
                icon={icon2}
                text="free delivery"
                para="24/7 amazing services"
              />
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-sm-0">
              <Props
                icon={icon3}
                text="rasy return"
                para="order $50 & more"
              />
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-sm-0">
              <Props
                icon={icon4}
                text="first delivery"
                para="with in 10 days"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
