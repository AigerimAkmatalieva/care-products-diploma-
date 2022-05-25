import menu1Image from "../assets/menuheader.jpg";
import menu2Image from "../assets/headermenu.jpg";
import menu3Image from "../assets/header.jpg";
import menu4Image from "../assets/pizza.svg";
import menu5Image from "../assets/pizzaimage.svg";
import menu6Image from "../assets/header.jpg";


const products = [
  {
    image: menu1Image,
    productId: "Kebab",
    categoryId: "Kebab",
    title: "Kebab",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 155,
  },
  {
    image: menu2Image,
    productId: "Kebab",
    categoryId: "Kebab",
    title: "Kebab",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 130,
  },
  {
    image: menu3Image,
    productId: "Steak",
    categoryId: "Steak",
    title: "Steak",
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
    productId: "Steak",
    categoryId: "Steak",
    title: "Steak",
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