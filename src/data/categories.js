import steakImage from "../assets/aboutsteik.jpg";
import pizzaImage from "../assets/pizza.jpg";
import shashlikImage from "../assets/hero.png";

const categories = [
  {
    image: steakImage,
    categoryId: "Steak",
    title: "Steak",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    image: shashlikImage,
    categoryId: "Shashlik",
    title: "Shashlik",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    image: pizzaImage,
    categoryId: "Pizza",
    title: "Pizza",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}