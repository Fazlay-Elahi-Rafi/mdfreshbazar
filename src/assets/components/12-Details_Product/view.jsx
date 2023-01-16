import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";

import { BsCart4, BsFillPatchCheckFill } from "react-icons/bs";
import {
  FaHeart,
  FaRandom,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Rating from "@mui/material/Rating";

import AboutProduct from "./about_product";
import AddReview from "./addReview";
import { addToCartAction } from "../../redux/action/cartAction";

export default function View() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductRedu);
  const { cart, msg } = useSelector((state) => state.CartReducer);

  const [amount, setAmount] = useState(1);

  const addFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));

    setTimeout(() => {
      dispatch({ type: "CLEAR_CART_ERROR" });
    }, 3000);
  };

  // const increase = () => {
  //   setAmount((oldAmount) => {
  //     let tempAmount = oldAmount + 1;
  //     if (tempAmount > product.stock) {
  //       tempAmount = product.stock;
  //     }
  //     return tempAmount;
  //   });
  // };
  // const decrease = () => {
  //   setAmount((oldAmount) => {
  //     let tempAmount = oldAmount - 1;
  //     if (tempAmount < 1) {
  //       tempAmount = 1;
  //     }
  //     return tempAmount;
  //   });
  // };

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_ID", id });
    localStorage.setItem("project13", JSON.stringify(cart));
  }, [id, product, cart]);

  return (
    <section className="view">
      {product && (
        <div className="container">
          {msg !== "" ? (
            <div className="msg">
              <div className="">
                <h3 className="msg__text">
                  <BsFillPatchCheckFill className="msg__i" /> {msg}
                </h3>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-12 col-md-10 col-lg-5 d-flex  align-items-lg-start align-items-xl-center justify-content-center view__product">
              <div className="view__product-img">
                <div className="col-8 col-lg-10 col-xl-9">
                  <ReactImageMagnify
                    className="view__zoom"
                    {...{
                      smallImage: {
                        alt: "image",
                        isFluidWidth: true,
                        src: product.image,
                      },
                      largeImage: {
                        src: product.image_magnify,
                        width: 1000,
                        height: 1000,
                      },
                      enlargedImageContainerDimensions: {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-10 col-lg-6 p-lg-0 mt-5 mt-lg-0">
              <div className="view__body">
                <a href="#" className="view__title">
                  {product.name}
                </a>

                <p className="view__brand">
                  brand: <a href="#">mdrafi</a>
                </p>

                <div className="d-flex align-items-center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product && product.rating}
                    precision={0.5}
                    max={5}
                    readOnly
                  />
                  <span className="view__review">{`(${product.rating} reviews)`}</span>
                </div>

                <div className="view__price">
                  <div className="">
                    <h5 className="view__price-new">${product.price}</h5>
                  </div>
                  <div className="">
                    <h5 className="view__price-old">
                      <del>${product.oldPrice}</del>
                    </h5>
                  </div>
                </div>

                <p className="view__para">{product.about}</p>

                <div className="view__tags">
                  <h3 className="view__text">tags:</h3>
                  <ul>
                    <li>
                      <a href="#">organic</a>
                    </li>
                    <li>
                      <a href="#">fruits</a>
                    </li>
                    <li>
                      <a href="#">chilis</a>
                    </li>
                  </ul>
                </div>
                <div className="view__share view__tags">
                  <h3 className="view__text">share:</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <button
                    className="view__btn btn form-control"
                    onClick={() => addFun(id, amount, product)}
                  >
                    <BsCart4 className="view__btn-icon" /> add to card
                  </button>
                </div>

                <div className="d-sm-flex justify-content-between">
                  <button className="view__btn view__btn-one form-control btn mb-3 mb-sm-0">
                    <FaHeart className="view__btn-icon" /> add to wish
                  </button>
                  <button className="view__btn view__btn-two form-control btn">
                    <FaRandom className="view__btn-icon" /> compare this
                  </button>
                </div>
              </div>
            </div>
          </div>

          <AboutProduct />
          <AddReview />
        </div>
      )}
    </section>
  );
}
