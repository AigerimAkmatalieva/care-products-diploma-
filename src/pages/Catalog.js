import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";
import productImage from "../assets/header2"


function Catalog() {


  return (
    <>
      <Header
        title="Catalog"
        image={productImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Catalog;