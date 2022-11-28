import React from "react";

import logo from "../../img/logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMobileAlt,
} from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

import google from "../../img/g-store.png";
import app from "../../img/a-store.png";
import payment1 from "../../img/p-1.png";
import payment2 from "../../img/p-2.png";
import payment3 from "../../img/p-3.png";
import payment4 from "../../img/p-4.png";

export default function Footer() {
  return (
    <>
      <footer className="footer mb-5 mb-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4 mb-5">
              <div className="col-8 col-sm-6">
                <a href="#">
                  <img className="img-fluid w-50" src={logo} alt="logo" />
                </a>
              </div>

              <div className="col-sm-10">
                <p className="footer__para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque quisquam, sed soluta debitis, voluptatum nam error.
                </p>
              </div>

              <div className="">
                <ul className="footer__social footer__ul d-flex">
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
                  <li>
                    <a href="#">
                      <FaPinterestP className="footer__social-icon footer__social-pin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-3 footer__contact mb-5">
              <h3 className="footer__text">contact us</h3>
              <div className="">
                <ul className="footer__ul">
                  <li className="d-flex align-items-center">
                    <div className="me-2">
                      <MdAlternateEmail className="footer__contact-i" />
                    </div>
                    <div className="">
                      <span>fazlayrafi2001@gmail.com</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center my-4">
                    <div className="me-2">
                      <FaMobileAlt className="footer__contact-i" />
                    </div>
                    <div className="">
                      <span>+8801828481501</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="me-2">
                      <BiCurrentLocation className="footer__contact-i" />
                    </div>
                    <div className="">
                      <span>Bangladesh, Dhaka || Gazipur,Pubail</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-xl-2 footer__contact mb-5 mb-md-0">
              <h3 className="footer__text">quick links</h3>
              <div className="">
                <ul className="footer__ul">
                  <li className="d-flex align-items-center mb-4">
                    <a href="#" className="">
                      <span>My Account</span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <a href="#" className="">
                      <span>Order History</span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <a href="#" className="">
                      <span>Order Tracking</span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <a href="#" className="">
                      <span>Best Seller</span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <a href="#" className="">
                      <span>Location</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 footer__contact mb-5 mb-md-0">
              <h3 className="footer__text">Download App</h3>
              <div className="">
                <ul className="footer__ul">
                  <li className="d-flex align-items-center mb-4">
                    <div className="">
                      <p className="footer__para m-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Exercitationem laboriosam perspiciatis officiis,
                        atque perferendis voluptatem aliquid nesciunt similique.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="me-3">
                      <a href="#">
                        <img className="img-fluid" src={google} alt="image" />
                      </a>
                    </div>
                    <div className="">
                      <a href="#">
                        <img className="img-fluid" src={app} alt="image" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="footer__bottom d-md-flex">
              <div className="col-md-6 col-lg-6 text-center text-md-start mb-4 mb-md-0">
                <p className="footer__bottom-p">
                  © All Copyrights Reserved by <a href="#">MD.RAFI</a>
                </p>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4 text-center text-md-end m-auto">
                <ul className="footer__ul d-flex">
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid w-50"
                        src={payment1}
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid w-50"
                        src={payment2}
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid w-50"
                        src={payment3}
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid w-50"
                        src={payment4}
                        alt="image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
