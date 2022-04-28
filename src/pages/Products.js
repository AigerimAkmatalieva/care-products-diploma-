import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/hero.png";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header 
      title="Food Menu" 
      image={headerImage} 
      p="Book a table">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Header>
      <h1 style={{color: "white", textAlign: "center"}}>Most popular items</h1>

      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;
