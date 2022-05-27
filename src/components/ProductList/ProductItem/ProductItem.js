import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <img src={product.image} alt="product.title" />
      <br/>
      Lychee, mango, black sesame, red masago, soft cheese, nori, rice
      <Link to={"/products/" + product.productId}>{product.title}</Link>
      <br/>
      <div className={classes.price}>{product.price}$</div>
    </div>
  );
}

export default ProductItem;