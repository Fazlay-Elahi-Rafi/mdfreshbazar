import React from "react";

export default function EditProfile() {
  return (
    <>
      <div className="profile__info">
        <div className="row">
          <div className="col-12">
            <div className="profile__info-layer">
              <h2 className="profile__info-heading">edit information</h2>

              <form className="profile__info-input">
                <div className="">
                  <label htmlFor="name" className="text-capitalize">
                    full name
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Enter Name..."
                  />
                </div>

                <div className="">
                  <label htmlFor="email" className="text-capitalize">
                    email
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Enter Email..."
                  />
                </div>

                <div className="">
                  <label htmlFor="phone" className="text-capitalize">
                    phone
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Phone..."
                  />
                </div>

                <div className="">
                  <label htmlFor="date" className="text-capitalize">
                    date of birth
                  </label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="">
                  <label htmlFor="gender" className="text-capitalize">
                    gender
                  </label>

                  <select className="form-control middle__search-inp">
                    <option value="select">Select Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                </div>

                <div className="profile__info-input--submit">
                  <input
                    className="limited__card-btn btn"
                    type="submit"
                    value="update Profile"
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
