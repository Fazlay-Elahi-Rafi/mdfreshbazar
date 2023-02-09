import React from "react";

import { HiOutlineCake } from "react-icons/hi";
import { FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Info() {
  return (
    <>
      <div className="profile__info">
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <div className="profile__info-layer">
              <h2 className="profile__info-heading">account information</h2>

              <div className="profile__info-body">
                <ul className="profile__info-body--list">
                  <li>
                    <FiPhone className="profile__info-body--i" /> 01828481501
                  </li>
                  <li>
                    <MdOutlineAlternateEmail className="profile__info-body--i" />
                    fazlayrafi2001@gmail.com
                  </li>
                  <li>
                    <FiUser className="profile__info-body--i" /> male
                  </li>
                  <li>
                    <HiOutlineCake className="profile__info-body--i" />
                    2000-11-20
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="profile__info-layer">
              <h2 className="profile__info-heading">description</h2>

              <div className="profile__info-body profile__info-scroll">
                <p className="profile__info-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores consectetur quaerat assumenda et cupiditate
                  voluptatibus numquam nemo doloremque? Sint neque labore dolor
                  aut soluta odio, dolorum cumque molestias velit rem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="profile__info-layer">
              <h2 className="profile__info-heading">other information</h2>

              <form className="profile__info-input">
                <div className="">
                  <label htmlFor="facebook">Add your facebook link</label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="http://www/facebook.com"
                  />
                </div>

                <div className="">
                  <label htmlFor="twitter">Add your twitter link</label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="http://www/twitter.com"
                  />
                </div>

                <div className="">
                  <label htmlFor="instargram">Add your instargram link</label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="http://www/instargram.com"
                  />
                </div>

                <div className="">
                  <label htmlFor="linkedin">Add your linkedin link</label>

                  <input
                    className="form-control middle__search-inp"
                    type="text"
                    placeholder="http://www/linkedin.com"
                  />
                </div>

                <div className="profile__info-input--desc">
                  <label htmlFor="linkedin">Description</label>

                  <textarea
                    className="form-control middle__search-inp"
                    cols="30"
                    rows="7"
                    placeholder="Write..."
                  ></textarea>
                </div>

                <div className="profile__info-input--submit">
                  <input
                    className="limited__card-btn btn"
                    type="submit"
                    value="update & save"
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
