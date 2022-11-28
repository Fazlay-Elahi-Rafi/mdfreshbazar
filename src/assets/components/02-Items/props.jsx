import React from "react";

export default function Props( props ) {
  return (
    <>
      {/* <div className="col-3 d-flex justify-content-between align-items-center item__body mx-3"> */}
      <div className="col-4">
        <img className="img-fluid" src={props.img} alt="items" />
      </div>
      <div className="col-7">
        <a href="#" className="item__title">
          {props.title}
        </a>
        <a href="#" className="item__text">
          {props.text}
        </a>
      </div>
      {/* </div> */}
    </>
  );
}
