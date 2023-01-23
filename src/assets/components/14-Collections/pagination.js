import React, { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import CollectionBody from "./collection_body";

const Pagination = ({ products, isActive }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {currentProducts.map((product, index) => (
        <CollectionBody
          key={product.id}
          product={product}
          isActive={isActive}
        />
      ))}

      <div className="">
        <ul className="collection__pagination">
          <li className="">
            <button
              className={`collection__pagination-btn ${
                currentPage === 1 ? "collection__pagination-btn--disable" : ""
              }`}
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              <FaArrowLeft className="collection__pagination-btn--i" />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                onClick={(e) => handleClick(e, i + 1)}
                className={`collection__pagination-num ${
                  currentPage === i + 1
                    ? "collection__pagination-active"
                    : "collection__pagination-num"
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`collection__pagination-btn ${
                currentPage === totalPages
                  ? "collection__pagination-btn--disable"
                  : ""
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <FaArrowRight className="collection__pagination-btn--i" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
