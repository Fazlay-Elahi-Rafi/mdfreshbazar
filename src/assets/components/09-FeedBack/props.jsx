import React from "react";

import Rating from "@mui/material/Rating";

export default function Props(props) {
  return (
    <>
      <div className="text-center">
        <div className="feedback__card">
          <div className="feedback__card-img">
            <img className="img-fluid" src={props.img} alt="image" />
          </div>

          <div className="col-10 m-auto">
            <div className="feedback__card-body">
              <h4 className="feedback__card-name">{props.name}</h4>

              <div className="">
                <Rating
                  name="half-rating-read"
                  defaultValue={props.rating}
                  precision={0.5}
                  max={5}
                  readOnly
                />
              </div>

              <p className="feedback__card-para">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
