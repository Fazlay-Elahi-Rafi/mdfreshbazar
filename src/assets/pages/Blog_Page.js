import React from "react";
import Title from "../components/00-Head/title";

import img from "../img/d-banner.jpg";

import Blog from "../components/16-Blog/blog";
import Banner from "../components/00-Head/banner";

export default function BlogPage() {
  return (
    <>
      <Title title="Blog Page" />

      <Banner title="Blog" img={img} text="Blog" />

      <Blog />
    </>
  );
}
