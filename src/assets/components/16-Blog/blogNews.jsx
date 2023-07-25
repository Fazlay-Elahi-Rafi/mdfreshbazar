import React, { useState, useEffect } from "react";

import { useFetch } from "./fetch";

import { FaUser, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

export default function BlogNews() {
  const { loading, data } = useFetch();
  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) return;
    setBlog(data[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <>
      <div className="blog__news">
        {blog
          ? blog.map((data) => {
              return (
                <div className="card blog__news-card" key={data.id}>
                  <a className="blog__news-card--img" href="#">
                    <img
                      src={data.image}
                      className="img-fluid"
                      alt={data.image}
                    />
                  </a>

                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <h4 className="blog__news-text mb-0 me-4">
                        <FaUser className="blog__news-i" />
                        {data.author}
                      </h4>
                      <p className="blog__news-text mb-0">
                        <BsCalendar3 className="blog__news-i" />
                        {data.date}
                      </p>
                    </div>

                    <div className="">
                      <a href="#" className="blog__news-title">
                        {data.name}
                      </a>

                      <p className="blog__author-p blog__news-desc">
                        {data.desc}
                      </p>

                      <button className="blog__news-btn">
                        read more <FaArrowRight className="blog__news-btn--i" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}

        <div className="col-12 col-xxl-10 d-flex justify-content-between pt-4">
          <button className="btn blog__paginat-arrow" onClick={prevPage}>
            <FaArrowLeft className="blog__paginat-icon" />
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`btn blog__paginat ${
                  index === page ? "blog__paginat-active" : null
                }`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="btn blog__paginat-arrow" onClick={nextPage}>
            <FaArrowRight className="blog__paginat-icon" />
          </button>
        </div>
      </div>
    </>
  );
}
