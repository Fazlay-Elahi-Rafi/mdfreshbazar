import React from "react";

export default function ChangePassword() {
  return (
    <>
      <div className="profile__info">
        <div className="row">
          <div className="col-12">
            <div className="profile__info-layer">
              <h2 className="profile__info-heading">change password</h2>

              <form className="profile__info-input">
                <div className="">
                  <label htmlFor="old" className="text-capitalize">
                    old password
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Enter Your Old Password"
                  />
                </div>

                <div className="">
                  <label htmlFor="new" className="text-capitalize">
                    new password
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Enter Your New Password"
                  />
                </div>

                <div className="">
                  <label htmlFor="confirm" className="text-capitalize">
                    confirm password
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Enter Your Confirm Password"
                  />
                </div>

                <div className="profile__info-input--submit">
                  <input
                    className="limited__card-btn btn"
                    type="submit"
                    value="change password"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
