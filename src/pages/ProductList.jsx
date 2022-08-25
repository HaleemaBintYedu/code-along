import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import useAxios from "../hooks/useAxios";
import { useProductContext } from "../context/productContext";

function ProductList() {
  // //   const [products, setProducts] = useState([]);
  // const { data, isLoading, error } = useAxios(
  //   "https://api.escuelajs.co/api/v1/products"
  // );

  const { data, isLoading, error } = useAxios(
    "https://fakestoreapi.com/products"
  );
  const { products, setProducts } = useProductContext();

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       const results = await axios.get(
  //         "https://api.escuelajs.co/api/v1/products"
  //       );
  //       setProducts(results.data);
  //       //    console.log(results);
  //     };

  //     getProducts();
  //   }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  // console.log(data);
  // console.log(products);

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      {products?.map((data) => (
        <Product product={data} />
      ))}
    </div>
  );
}

export default ProductList;
