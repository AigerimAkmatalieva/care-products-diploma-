import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getProduct } from "../data/products";
import productImage from "../assets/header2.svg";

function Products() {
  return (
    <>
      <Header title="Products" image={productImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
        odio rem modi laudantium. Tempora consequatur error natus, neque
        expedita maiores ut temporibus tempore sed obcaecati quidem nemo
        molestias.
      </Header>
      <ProductList products={getProduct()} />
    </>
  );
}

export default Products;
