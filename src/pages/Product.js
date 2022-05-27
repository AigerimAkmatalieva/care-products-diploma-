import React from "react";
import { useParams } from "react-router-dom";
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
          <button style={{width: "120px", height: "30px", backgroundColor: "rgb(236, 141, 15)", color: "white", fontSize: "1rem", fontWeight: "300",borderRadius: "15px"}}>
           {product.price}$
          </button>
        </div>
        <img style={{width: "400px"}} src={product.image} alt={product.title} />
      </div>
    </>
  );
}

export default Product;