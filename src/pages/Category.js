import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { getCategory} from "../data/categories";
import { getProducts } from "../data/products";

function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }

  return (
    < >
      <div style={{display: "flex", padding: "3rem 5rem"}}>
        <div style={{padding: "1.3rem", textAlign: "center", lineHeight: "50px"}}>
          <h2 style={{color: "rgb(236, 141, 15)"}}>{category.title}</h2>
          <p style={{color: "white"}}>{category.description}</p>
        </div>
        <img style={{width: "300px", height: "300px", padding: "100px 0 0 0"}} src={category.image} alt={category.title} />
      </div>
      <ProductList products={getProducts(category.categoryId)} />
    </>
  );
}

export default Category;