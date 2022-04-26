import Header from "../components/Header/Header";
import headerImage from "../assets/header.svg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {

  return (
    <>
    <Header
      title=""
      image={headerImage}>
      
      <ProductList products={getProducts()} />
    </Header>
  </>
   );
}

export default Products;
