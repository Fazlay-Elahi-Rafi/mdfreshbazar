import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="service__body d-flex align-items-center justify-content-around justify-content-sm-center">
        <div className="col-2">
          <img className="img-fluid" src={props.icon} alt="image" />
        </div>

        <div className="ms-4">
          <h4 className="service__text mb-2">{props.text}</h4>
          <p className="service__para">{props.para}</p>
        </div>
      </div>
    </>
  );
}
