import React from "react";

// import img from "../../img/adds.png";
import img2 from "../../img/adds-2.png";
import icon from "../../img/i-01.png";
import icon2 from "../../img/i-02.png";
import icon3 from "../../img/i-03.png";
import { Props, PropsTwo } from "./props";

export default function Adds() {
  return (
    <>
      <section className="adds">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 text-center m-auto">
              <h3 className="adds__sig">md.rafi</h3>
              <h1 className="adds__title">fresh vegetables</h1>
              <hr className="adds__title-border" />
              <p className="adds__para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                quia voluptas eaque beatae, alias illum animi. Amet obcaecati
                eaque ipsam.
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="adds__card d-md-flex align-items-center">
              <div className="col-md-4">
                <div className="col-12 d-flex align-items-center">
                  <Props
                    clssO="adds__card-text text-end"
                    clssTw="float-end text-end"
                    text="spinach"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ad. Lorem ipsum dolor sit amet consectetur"
                    icon={icon}
                  />
                </div>
                <div className="col-12 d-flex align-items-center adds__card adds__card-margin--one">
                  <Props
                    clssO="adds__card-text text-end"
                    clssTw="float-end text-end"
                    text="carrot"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ad. Lorem ipsum dolor sit amet consectetur"
                    icon={icon3}
                  />
                </div>
                <div className="col-12 d-flex align-items-center adds__card">
                  <Props
                    clssO="adds__card-text text-end"
                    clssTw="float-end text-end"
                    text="rhubarb"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ad. Lorem ipsum dolor sit amet consectetur"
                    icon={icon2}
                  />
                </div>
              </div>

              <div className="col-md-4 text-center my-4 my-md-0">
                <img className="img-fluid" src={img2} alt="image" />
              </div>

              <div className="col-md-4">
                <div className="col-12 d-flex align-items-center">
                  <PropsTwo
                    clssO="adds__card-text text-start"
                    clssTw="float-end text-start"
                    text="spinach"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ad. Lorem ipsum dolor sit amet consectetur"
                    icon={icon}
                  />
                </div>
                <div className="col-12 d-flex align-items-center adds__card adds__card-margin--two">
                  <PropsTwo
                    clssO="adds__card-text text-start"
                    clssTw="float-end text-start"
                    text="carrot"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ad. Lorem ipsum dolor sit amet consectetur"
                    icon={icon3}
                  />
                </div>
                <div className="col-12 d-flex align-items-center adds__card">
                  <PropsTwo
                    clssO="adds__card-text text-start"
                    clssTw="float-end text-start"
                    text="rhubarb"
                    desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ad. Lorem ipsum dolor sit amet consectetur"
                    icon={icon2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
