import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

import productImage from "../assets/beautycard.svg";

function Catalog() {
  const products = {
    hazelnut: {
      image: productImage,
      path: "/",
      title: "Hazelnut",
      price: 10,
    },
    darkRoast: {
      image: productImage,
      path: "/",
      title: "Dark roast",
      price: 12,
    },
    houseBlend: {
      image: productImage,
      path: "/",
      title: "House blend",
      price: 14,
    },
    lightRoast: {
      image: productImage,
      path: "/",
      title: "Light roast",
      price: 13,
    }
  };

  return (
    <>
      <Header
        title="Catalog"
        image={productImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>

      <ProductList products={products} />
    </>
  );
}

export default Catalog;