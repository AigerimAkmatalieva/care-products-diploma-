import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getProduct } from "../data/products";
import headerImage from "../assets/header2.svg";

function Products() {
  const styles = {
    backgroundImage: `url(${headerImage})`
  }
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
