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
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
    odio rem modi laudantium. Tempora consequatur error natus, neque
    expedita maiores ut temporibus tempore sed obcaecati quidem nemo
    molestias.`,
    price: 10,
  },
{
    image: browsImage,
    productId: "Brows",
    title: "Dark roast",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
    odio rem modi laudantium. Tempora consequatur error natus, neque
    expedita maiores ut temporibus tempore sed obcaecati quidem nemo
    molestias.`,
    price: 12,
  },
{
    image: careImage,
    productId: "Care",
    title: "Care",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
    odio rem modi laudantium. Tempora consequatur error natus, neque
    expedita maiores ut temporibus tempore sed obcaecati quidem nemo
    molestias.`,
    price: 14,
  },
{
    image: eyebrowsImage,
    productId: "Eye brows",
    title: "Eye brows",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
    odio rem modi laudantium. Tempora consequatur error natus, neque
    expedita maiores ut temporibus tempore sed obcaecati quidem nemo
    molestias.`,
    price: 16,
  },
{
    image: perfectbrowsImage,
    productId: "Perfect brows",
    title: "Perfect brows",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
    odio rem modi laudantium. Tempora consequatur error natus, neque
    expedita maiores ut temporibus tempore sed obcaecati quidem nemo
    molestias.`,
    price: 18,
  },
{
    image: hennaeyebrowsImage,
    productId: "Henna",
    title: " Henna eyebrows",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt
    odio rem modi laudantium. Tempora consequatur error natus, neque
    expedita maiores ut temporibus tempore sed obcaecati quidem nemo
    molestias.`,
    price: 15,
  },
];


export function getProducts(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}