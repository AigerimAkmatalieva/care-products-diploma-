import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

import productImage from "../assets/header2.svg";
import beautyImage from "../assets/beautycard.svg";
import browsImage from "../assets/browscard.svg";
import careImage from "../assets/carecard.svg";
import eyebrowsImage from "../assets/eyebrows.svg";
import perfectbrowsImage from "../assets/perfectbrows.svg";
import hennaeyebrowsImage from "../assets/hennaeyebrows.svg";

function Catalog() {
  const products = {
    Beaty: {
      image: beautyImage,
      path: "/",
      title: "Beaty",
      price: 10,
    },
    Brows: {
      image: browsImage,
      path: "/",
      title: "Dark roast",
      price: 12,
    },
    Care: {
      image: careImage,
      path: "/",
      title: "Care",
      price: 14,
    },
    Eyebrows: {
      image: eyebrowsImage,
      path: "/",
      title: "Eye brows",
      price: 16,
    },
    Perfectbrows: {
      image: perfectbrowsImage,
      path: "/",
      title: "Perfect brows",
      price: 18,
    },
    Henna: {
      image: hennaeyebrowsImage,
      path: "/",
      title: " Henna eyebrows",
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