import menu1Image from "../assets/sushi-card.jpg";
import menu2Image from "../assets/sushi-card1.jpg";
import menu3Image from "../assets/sushi-card2.jpg";
import menu4Image from "../assets/pizza-card2.jpg";
import menu5Image from "../assets/pizza-header.jpg";
import menu6Image from "../assets/pizza-card1.jpg";


const products = [
  {
    image: menu1Image,
    productId: "Sushi",
    categoryId: "Sushi",
    title: "Sushi",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 155,
  },
  {
    image: menu2Image,
    productId: "Sushi",
    categoryId: "Sushi",
    title: "Sushi",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 130,
  },
  {
    image: menu3Image,
    productId: "Sushi",
    categoryId: "Sushi",
    title: "Sushi",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 120,
  },
  {
    image: menu4Image,
    productId: "Pizza",
    categoryId: "Pizza",
    title: "Pizza",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu5Image,
    productId: "Pizza",
    categoryId: "Pizza",
    title: "Pizza",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu6Image,
    productId: "Pizza",
    categoryId: "Pizza",
    title: "Pizza",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}