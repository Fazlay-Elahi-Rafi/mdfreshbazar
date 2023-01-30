import React from "react";

export default function NotMatch({ value }) {
  return (
    <>
      <div className="row">
        <div className="cart__empty">
          <div className="">
            {value ? (
              <h2 className="cart__empty-text">
                Product not match by this
                <span className="cart__empty-span">{` "${value}"`}</span>
                <span> name</span>
              </h2>
            ) : (
              <h2 className="cart__empty-text">Product not match</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
