import React from "react";
import { TbDiscount2 } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";

export default function Props(props) {
  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-sm-9 p-1 d-md-none d-block">
          <img src={props.img} className="img-fluid" alt="item" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="header__item-layer">
              <div className="">
                <h1 className="header__item-title">{props.title}</h1>
                <p className="header__item-para">{props.desc}</p>

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
          <img src={props.img2} className="img-fluid" alt="item" />
        </div>
      </div>
    </>
  );
}
