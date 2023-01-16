import React from "react";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";

import img from "../img/404.png";

export default function Error() {
  return (
    <>
      <section className="error">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-xl-9 m-auto">
              <img className="img-fluid" src={img} alt="404" />

              <div className="error__button">
                <Link to="/" className="error__button-btn">
                  go back <GoArrowRight className="error__button-btn--i" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
