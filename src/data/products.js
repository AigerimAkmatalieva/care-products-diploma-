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
    title: "Beaty",
    price: 10,
  },
{
    image: browsImage,
    productId: "Brows",
    title: "Dark roast",
    price: 12,
  },
{
    image: careImage,
    productId: "Care",
    title: "Care",
    price: 14,
  },
{
    image: eyebrowsImage,
    productId: "Eye brows",
    title: "Eye brows",
    price: 16,
  },
{
    image: perfectbrowsImage,
    productId: "Perfect brows",
    title: "Perfect brows",
    price: 18,
  },
{
    image: hennaeyebrowsImage,
    productId: "Henna",
    title: " Henna eyebrows",
    price: 15,
  },
];


export function getProducts() {
  return products;
}