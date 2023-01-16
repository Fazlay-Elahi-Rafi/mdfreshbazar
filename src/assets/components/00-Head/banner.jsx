import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ title, text, img }) {
  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="card banner__card">
              <img src={img} className="img-fluid" alt="image" />
              <div className="card-img-overlay banner__card-layer">
                <div className="">
                  <h5 className="banner__card-title">{title}</h5>

                  <div className="">
                    <ul className="banner__card-list">
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <span className="banner__card-list--divide">/</span>
                      </li>
                      <li className="banner__card-list--active">{text}</li>
                    </ul>
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
