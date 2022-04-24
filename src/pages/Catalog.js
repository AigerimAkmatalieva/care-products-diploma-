import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";
import productImage from "../assets/header2.svg"


function Catalog() {


  return (
    <>
      <Header
        title="Catalog"
        image={productImage}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
        odio rem modi laudantium. Tempora consequatur error natus, neque
        expedita maiores ut temporibus tempore sed obcaecati quidem nemo
        molestias.
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Catalog;