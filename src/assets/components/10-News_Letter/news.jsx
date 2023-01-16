import React from "react";

import { MdAlternateEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";

import img from "../../img/newsLetter.jpg";

export default function News() {
  return (
    <>
      <section className="news">
        <div className="container-fluid p-0">
          <div className="card news__card">
            <img src={img} className="img-fluid" alt="image" />
            <div className="card-img-overlay news__card-layer d-lg-flex justify-conten-center  align-items-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <h5 className="news__card-text">
                      stay home & get your daily needs from our shop
                    </h5>
                    <p className="news__card-para">
                      start your daily shopping with <span>md.rafi</span>
                    </p>
                  </div>
                  <div className="col-lg-7 text-end">
                    <form className="col-sm-9 col-xxl-6 me-auto me-md-0 ms-md-auto news__card-form">
                      <TbBrandTelegram className="news__card-form--i" />
                      <input
                        className="news__card-form--inp form-control"
                        type="text"
                        placeholder="Your email address"
                      />

                      <button className="news__card-form--btn btn">
                        <MdAlternateEmail />
                        subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
