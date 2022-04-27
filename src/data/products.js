import beautyImage from "../assets/beautycard.svg";
import browsImage from "../assets/browscard.svg";
import careImage from "../assets/carecard.svg";
import eyebrowsImage from "../assets/eyebrows.svg";
import perfectbrowsImage from "../assets/perfectbrows.svg";
import hennaeyebrowsImage from "../assets/hennaeyebrows.svg";

const products = [
  {
    image: beautyImage,
    productId: "Beauty",
    title: "Beauty",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?`,
    price: 10,
  },
  {
    image: hennaeyebrowsImage,
    productId: "hennaeyebrows",
    title: "Henna eyebrows",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?`,
    price: 12,
  },
  {
    image: browsImage,
    productId: "Brows",
    title: "Brows",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?`,
    price: 12,
  },
  {
    image: careImage,
    productId: "Care",
    title: "Care",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?`,
    price: 14,
  },
  {
    image: eyebrowsImage,
    productId: "Eyebrows",
    title: "Eyebrows",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?`,
    price: 13,
  },
  {
    image: perfectbrowsImage,
    productId: "Perfectbrows",
    title: "Perfectbrows",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum odio atque libero velit, quasi, sit accusamus dolor corrupti illo perferendis dolores distinctio nihil sint rerum temporibus placeat quod magnam?`,
    price: 11,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}