import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getProduct } from "../data/products";
import productImage from "../assets/header2.svg";

function Products() {
  return (
     <>
     <Header className="Header" style={styles}>
       <h1>Capsule Collection</h1>
     </Header>
     <ProductList products={getProduct()} />
   </>
  );
}

export default Products;
