import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ products }) {
  const productItem = products.map(product => (
    <ProductItem key={product.productId} product={product} />
  ));

  return <div className={classes.ProductList}>{productItem}</div>;
}
export default ProductList;
