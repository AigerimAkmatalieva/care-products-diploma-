import menu1Image from "../assets/sushi-card.jpg";
import menu2Image from "../assets/sushi-card1.jpg";
import menu3Image from "../assets/sushi-card2.jpg";
import menu4Image from "../assets/rolly.png";
import menu5Image from "../assets/rollyImage.png";
import menu6Image from "../assets/rollyimage1.png";


const products = [
  {
    image: menu1Image,
    productId: "Sushi",
    categoryId: "Sushi",
    title: "Sushi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 4,
  },
  {
    image: menu2Image,
    productId: "Sushi1",
    categoryId: "Sushi",
    title: "Sushi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 6,
  },
  {
    image: menu3Image,
    productId: "Sushi2",
    categoryId: "Sushi",
    title: "Sushi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
  },
  {
    image: menu4Image,
    productId: "Rolly",
    categoryId: "Rolly",
    title: "Rolly",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 4,
  },
  {
    image: menu5Image,
    productId: "Rolly1",
    categoryId: "Rolly",
    title: "Rolly",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 6,
  },
  {
    image: menu6Image,
    productId: "Rolly2",
    categoryId: "Rolly",
    title: "Rolly",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
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