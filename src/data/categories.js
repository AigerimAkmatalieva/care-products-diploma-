import steakImage from "../assets/aboutsteik.jpg";
import pizzaImage from "../assets/pizza.jpg";
import shashlikImage from "../assets/hero.png";

const categories = [
  {
    image: steakImage,
    categoryId: "Steak",
    title: "Steak",
    description: `A steak, also sometimes called "beef steak", is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though it can also be pan-fried. Steak can also be cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.`,
  },
  {
    image: shashlikImage,
    categoryId: "Shashlik",
    title: "Shashlik",
    description: `Shashlik is a dish of skewered and grilled cubes of meat, similar to or synonymous with shish kebab. It is known traditionally by various other names in the Caucasus, Eastern Europe and Central Asia,[2][3] and from the 19th century became popular as shashlik across much of the Russian Empire and nowadays in the Russian Federation and former Soviet republics.`,
  },
  {
    image: pizzaImage,
    categoryId: "Pizza",
    title: "Pizza",
    description: `Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.`,
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