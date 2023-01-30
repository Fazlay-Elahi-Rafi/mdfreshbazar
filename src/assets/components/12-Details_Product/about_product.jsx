import React from "react";

import Props from "./props";

import user1 from "../../img/clients-3.jpg";
import user2 from "../../img/clients-2.jpg";

export default function AboutProduct({ product }) {
  return (
    <div className="view__desc">
      <div className="row">
        <div className="view__desc-body">
          <div className="col-11 m-auto">
            <ul
              className="nav nav-tabs view__desc-list"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  review <span className="ms-1">(5)</span>
                </button>
              </li>
            </ul>
            <div className="view__desc-content" id="myTabContent">
              {/* --------> Description Part <--------  */}
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p className="view__para">{product.about}</p>

                <div className="view__desc-table text-capitalize">
                  <table>
                    <tbody>
                      <tr>
                        <th>product code</th>
                        <td>#{product.id}</td>
                      </tr>
                      <tr>
                        <th>weight</th>
                        <td>{product.weight}kg</td>
                      </tr>
                      <tr>
                        <th>type</th>
                        <td>@{product.type}</td>
                      </tr>
                      <tr>
                        <th>category</th>
                        <td>{product.category}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* --------> Review Part <--------  */}
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="view__desc-review">
                  <div className="view__desc-review--body">
                    <Props
                      user={user1}
                      name="fazlay rafi"
                      date="12 Dec, 2022"
                      link="/"
                      starValue={4}
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, magni molestias quisquam, voluptatem porro illum
                        maxime aperiam perspiciatis ratione labore officiis modi
                        rerum quia fugiat atque fuga numquam culpa soluta!"
                    />
                  </div>

                  <div className="view__desc-review--body mt-5  ms-2 ms-sm-5">
                    <Props
                      user={user2}
                      name="fazlay elahi rafi"
                      date="12 Dec, 2022"
                      link="/"
                      starValue={3}
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, magni molestias quisquam, voluptatem porro illum
                        maxime aperiam perspiciatis ratione labore officiis modi
                        rerum quia fugiat atque fuga numquam culpa soluta!"
                    />
                  </div>
                </div>

                <div className="view__desc-review mt-4">
                  <div className="view__desc-review--body">
                    <Props
                      user={user2}
                      name="fazlay elahi rafi"
                      date="12 Dec, 2022"
                      link="/"
                      starValue={4}
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, magni molestias quisquam, voluptatem porro illum
                        maxime aperiam perspiciatis ratione labore officiis modi
                        rerum quia fugiat atque fuga numquam culpa soluta!"
                    />
                  </div>

                  <div className="view__desc-review--body mt-5  ms-2 ms-sm-5">
                    <Props
                      user={user1}
                      name="md.rafi"
                      date="12 Dec, 2022"
                      link="/"
                      starValue={3}
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, magni molestias quisquam, voluptatem porro illum
                        maxime aperiam perspiciatis ratione labore officiis modi
                        rerum quia fugiat atque fuga numquam culpa soluta!"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
