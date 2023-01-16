import React from "react";

export default function AddReview() {
  return (
    <div className="view__addreview">
      <div className="row">
        <div className="view__desc-body">
          <div className="col-12 text-center d-fle justify-content-cente">
            <h2 className="view__title view__addreview-title">
              add you review
            </h2>
          </div>

          <div className="col-11 m-auto">
            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Describe"
              ></textarea>
            </div>

            <div className="d-sm-flex justify-content-between">
              <div className="col-sm-6 pe-sm-2">
                <input
                  className="form-control view__addreview-inp"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-sm-6 ps-sm-2 mt-3 mt-sm-0">
                <input
                  className="form-control view__addreview-inp"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="">
              <button className="view__btn btn form-control">add review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
