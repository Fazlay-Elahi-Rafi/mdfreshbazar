import React from "react";
import logo from "../../img/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <a href="#">
              <img className="img-fluid w-50" src={logo} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
