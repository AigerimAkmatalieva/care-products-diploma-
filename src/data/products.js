import menu1Image from "../assets/menuheader.jpg";
import menu2Image from "../assets/headermenu.jpg";
import menu3Image from "../assets/header.jpg";
import menu4Image from "../assets/menuheader.jpg";
import menu5Image from "../assets/headermenu.jpg";
import menu6Image from "../assets/header.jpg";


const products = [
  {
    image: menu1Image,
    productId: "Chicken Burger",
    title: "Chicken Burger",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu2Image,
    productId: "Chicken Burger",
    title: "Chicken Burger",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu3Image,
    productId: "Chicken Burger",
    title: "Chicken Burger",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu4Image,
    productId: "Chicken Burger",
    title: "Chicken Burger",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu5Image,
    productId: "Chicken Burger",
    title: "Chicken Burger",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
  },
  {
    image: menu6Image,
    productId: "Chicken Burger",
    title: "Chicken Burger",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 115,
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