import React, { useState } from "react";
import CardProduct from "./CardProduct";
import { useEffect } from "react";
import DataProducts from "./DataProducts.js";

const Products = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
    };

      fetch("https://corebiz-test.herokuapp.com/api/v1/products", requestOptions)
        .then((response) => {
          if (response.ok) {
            return  response.text();
          }
          throw new Error('Something went wrong');
        })
        .then((result) => setListProducts(result))
        .catch((error) => {
          console.log("error", error);
          setListProducts(DataProducts);

        })
  }, []);

  return (
    <div className="container d-flex flex-row justify-content-between">
      { listProducts.map(product => <CardProduct product={product} key={product.productId}/>)}
    </div>
  );
};

export default Products;
