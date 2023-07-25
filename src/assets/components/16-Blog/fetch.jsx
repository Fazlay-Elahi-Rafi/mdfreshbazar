import { useState, useEffect } from "react";
import paginate from "./pagination";
import BlogData from "./blogData";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(BlogData);

  const getProducts = async () => {
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
