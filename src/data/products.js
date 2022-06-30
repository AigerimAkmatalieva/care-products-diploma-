import menu1Image from "../assets/sushi-card.jpg";
import menu2Image from "../assets/sushi-card1.jpg";
import menu3Image from "../assets/sushi-card2.jpg";
import menu4Image from "../assets/rolly.png";
import menu5Image from "../assets/rollyImage.png";
import menu6Image from "../assets/rollyimage1.png";
import menu7Image from "../assets/sushi.png";
import menu8Image from "../assets/rolly1.png";
import menu9Image from "../assets/rolly2.png";
import menu10Image from "../assets/desertsushi.png";
import menu11Image from "../assets/desertsushi2.png";
import menu12Image from "../assets/imbir.png";
import menu13Image from "../assets/soya-sous.png";
import menu14Image from "../assets/vasabi.png";
import menu15Image from "../assets/sous.png";


const products = [
  {
    image: menu7Image,
    productId: "Sushi4",
    categoryId: "Sushi",
    title: "Mango-Lichi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 4,
  },
  {
    image: menu8Image,
    productId: "Sushi5",
    categoryId: "Sushi",
    title: "Rolly-Lite",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 6,
  },
  {
    image: menu9Image,
    productId: "Sushi6",
    categoryId: "Sushi",
    title: "Dragon",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
  },
  {
    image: menu1Image,
    productId: "Sushi",
    categoryId: "Sushi",
    title: "Mango-Lichi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 4,
  },
  {
    image: menu2Image,
    productId: "Sushi1",
    categoryId: "Sushi",
    title: "Rolly-Lite",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 6,
  },
  {
    image: menu3Image,
    productId: "Sushi2",
    categoryId: "Rolly-Lite",
    title: "Sushi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
  },
  {
    image: menu4Image,
    productId: "Rolly",
    categoryId: "Rolly",
    title: "Mango-Lichi",
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
    title: "Atlantic",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
  },
  {
    image: menu10Image,
    productId: "Roll10",
    categoryId: "Rolly",
    title: "Dragon",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 4,
  },
  {
    image: menu11Image,
    productId: "Rolly11",
    categoryId: "Rolly",
    title: "Mango-Lichi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 6,
  },
  {
    image: menu12Image,
    productId: "Sous4",
    categoryId: "Sous",
    title: "Ginger",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
  },
  {
    image: menu13Image,
    productId: "Sous3",
    categoryId: "Sous",
    title: "Soya-Sous",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 6,
  },
  {
    image: menu14Image,
    productId: "Sous2",
    categoryId: "Sous",
    title: "Vasabi",
    order: "Order",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    price: 3,
  },
  {
    image: menu15Image,
    productId: "Sous1",
    categoryId: "Sous",
    title: "Sous",
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