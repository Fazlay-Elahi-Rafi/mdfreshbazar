import React, { useEffect } from "react";
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
import Error from "./assets/pages/404";
import CartPage from "./assets/pages/Cart_Page";
import WishlistPage from "./assets/pages/Wishlist_Page";

export default function App() {
  const dispatch = useDispatch();
  const { total_items, cart } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });

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
  }, [cart]);
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
        <Scroll showBelow={250} />
      </Router>
    </>
  );
}
