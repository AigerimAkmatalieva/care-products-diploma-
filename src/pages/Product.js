import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  return (
    < >
      <div style={{display: "flex", padding: "3rem 5rem"}}>
        <div style={{padding: "1.3rem", textAlign: "center", lineHeight: "50px"}}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button style={{width: "120px", height: "30px", backgroundColor: "#F5ECE3"}}>
           {product.price}$
          </button>
        </div>
        <img style={{width: "400px"}} src={product.image} alt={product.title} />
      </div>
    </>
  );
}

export default Product;