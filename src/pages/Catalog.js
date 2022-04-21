import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

import productImage from "../assets/header.svg";
import beautyImage from "../assets/beautycard.svg";
import browsImage from "../assets/browscard.svg";
import careImage from "../assets/carecard.svg";
import eyebrowsImage from "../assets/eyebrows.svg";
import perfectbrowsImage from "../assets/perfectbrows.svg";
import hennaeyebrowsImage from "../assets/hennaeyebrows.svg";

function Catalog() {
  const products = {
    hazelnut: {
      image: beautyImage,
      path: "/",
      title: "Hazelnut",
      price: 10,
    },
    darkRoast: {
      image: browsImage,
      path: "/",
      title: "Dark roast",
      price: 12,
    },
    houseBlend: {
      image: careImage,
      path: "/",
      title: "House blend",
      price: 14,
    },
    houseBlend: {
      image: eyebrowsImage,
      path: "/",
      title: "House blend",
      price: 16,
    },
    houseBlend: {
      image: perfectbrowsImage,
      path: "/",
      title: "House blend",
      price: 18,
    },
    houseBlend: {
      image: hennaeyebrowsImage,
      path: "/",
      title: "House blend",
      price: 15,
    },
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