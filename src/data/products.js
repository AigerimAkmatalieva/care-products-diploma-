import menu1Image from "../assets/menu-1.jpg";
import menu2Image from "../assets/menu-2.jpg";
import menu3Image from "../assets/menu-3.jpg";
import menu4Image from "../assets/menu-4.jpg";
import menu5Image from "../assets/menu-5.jpg";
import menu6Image from "../assets/menu-6.jpg";


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