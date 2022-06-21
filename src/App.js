import React, { useEffect } from "react";

import webFont from "webfontloader";

import Home from "./assets/pages/Home";

export default function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Quicksand", "Nunito Sans", "Varela Round"],
      },
    });
  }, []);
  return (
    <>
      <Home />
    </>
  );
}
