import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import img from "../../img/myself.jpg";

import Sidebar from "./sidebar";
import Info from "./info";
import EditProfile from "./editProfile";
import ChangePassword from "./changePassword";

export default function Profile() {
  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 col-lg-4 col-xl-3">
              <div className="profile__sidebar">
                <div className="text-center">
                  <img
                    className="img-fluid profile__img"
                    src={img}
                    alt="image"
                  />

                  <div className="profile__user">
                    <h4 className="profile__user-name">fazlay elahi rafi</h4>
                    <h4 className="profile__user-email">
                      fazlayrafi2001@gmail.com
                    </h4>

                    <div className="profile__social">
                      <ul className="footer__social footer__ul d-flex justify-content-center">
                        <li>
                          <a href="#">
                            <FaFacebookF className="footer__social-icon footer__social-fb" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaTwitter className="footer__social-icon footer__social-tw" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaInstagram className="footer__social-icon footer__social-ins" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaLinkedinIn className="footer__social-icon footer__social-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Sidebar />
              </div>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-dashboard"
                  role="tabpanel"
                  aria-labelledby="v-pills-dashboard-tab"
                >
                  <Info />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-edit"
                  role="tabpanel"
                  aria-labelledby="v-pills-edit-tab"
                >
                  <EditProfile />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-wishlist"
                  role="tabpanel"
                  aria-labelledby="v-pills-wishlist-tab"
                >
                  <Info />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-order"
                  role="tabpanel"
                  aria-labelledby="v-pills-order-tab"
                >
                  <Info />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-password"
                  role="tabpanel"
                  aria-labelledby="v-pills-password-tab"
                >
                  <ChangePassword />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
