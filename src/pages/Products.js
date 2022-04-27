import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/header.svg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {

  return (
    <>
     <Header
    title="Our Products"
    image={headerImage}>
  </Header>

  <ProductList products={getProducts()} />
  </>
   );
}

export default Products;
