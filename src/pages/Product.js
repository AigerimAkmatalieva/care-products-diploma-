import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProducts } from "../data/products";




function Product() {
  const params = useParams();
  const product = getProducts(params.productId);


  return (
    <>
    <Header
      title={product.title}
      image={product.image}>
      {product.description}
    </Header>
  </>
  );
}

export default Product;