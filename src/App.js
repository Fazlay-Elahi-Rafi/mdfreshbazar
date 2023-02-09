import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import webFont from "webfontloader";

// --------> Fix for all Page
import Scroll from "./assets/components/00-Head/scroll";
import Navbar from "./assets/components/00-Head/navbar";
import Footer from "./assets/components/012-Footer/footer";

// --------> Pages's
import HomePage from "./assets/pages/Home_Page";
import DetailsPage from "./assets/pages/Details_Page";
import CartPage from "./assets/pages/Cart_Page";
import CollectionPage from "./assets/pages/Collection_Page";
import ProfilePage from "./assets/pages/Profile_Page";
import Error from "./assets/pages/404";

export default function App() {
  const dispatch = useDispatch();
  const { total_items, cart } = useSelector((state) => state.CartReducer);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width > 992) {
      dispatch({ type: "HIDE_SIDEBAR" });
      dispatch({ type: "HIDE_FILTER" });
    }

    webFont.load({
      google: {
        families: [
          "Quicksand",
          "Nunito Sans",
          "Varela Round",
          "Yellowtail",
          "Rubik",
          "Work Sans:500,600",
        ],
      },
    });
  }, [cart, width]);
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<CollectionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
        <Scroll showBelow={250} />
      </Router>
    </>
  );
}
