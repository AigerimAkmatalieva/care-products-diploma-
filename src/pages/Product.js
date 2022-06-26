import React from "react";
import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  return (
    < >
      <div style={{display: "flex", padding: "3rem 5rem"}}>
        <div style={{padding: "1rem", textAlign: "center", lineHeight: "50px"}}>
          <h2 style={{color: "rgb(236, 141, 15)"}}>{product.title}</h2>
          <p style={{color: "white"}}>{product.description}</p>
          <CartButton productId={params.productId} />
        </div>
        <img style={{width: "400px"}} src={product.image} alt={product.title} />
      </div>
    
    </>
  );
}

export default Product;