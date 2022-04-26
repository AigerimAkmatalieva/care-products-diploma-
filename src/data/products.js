import beautyImage from "../assets/beautycard.svg";
import browsImage from "../assets/browscard.svg";
import careImage from "../assets/carecard.svg";
import eyebrowsImage from "../assets/eyebrows.svg";
import perfectbrowsImage from "../assets/perfectbrows.svg";
import hennaeyebrowsImage from "../assets/hennaeyebrows.svg";

const products = [
  {
    image: beautyImage,
    productId: "hazelnut",
    title: "Hazelnut",
    description: `When the fruit is ripe, it is almost always handpicked, using either "selective picking", where only the ripe fruit is removed, or "strip-picking", where all of the fruit is removed from a limb all at once. Selective picking is often used to produce higher quality coffee because the cherries are picked at their ripest. Strip-picking is indiscriminate and will harvest unripe, ripe, and over-ripe fruit. To improve quality after strip-picking, the harvest must be sorted.`,
    price: 10,
  },
  {
    image: hennaeyebrowsImage,
    productId: "dark-roast",
    title: "Dark roast",
    description: `The Asian palm civet eats coffee berries and excretes the beans. Because the civet prefers the taste of the ripest cherries, the civet selectively harvests the cherries. Its digestive system then processes the beans by breaking down the mucilage and pulp surrounding the seed. Once the seeds are excreted by the civet, they can be harvested, processed and sold as a niche product. Once they are finally processed, these beans are called kopi luwak, and are often marketed as a rare and expensive coffee.`,
    price: 12,
  },
  {
    image: browsImage,
    productId: "dark-roast",
    title: "Dark roast",
    description: `The Asian palm civet eats coffee berries and excretes the beans. Because the civet prefers the taste of the ripest cherries, the civet selectively harvests the cherries. Its digestive system then processes the beans by breaking down the mucilage and pulp surrounding the seed. Once the seeds are excreted by the civet, they can be harvested, processed and sold as a niche product. Once they are finally processed, these beans are called kopi luwak, and are often marketed as a rare and expensive coffee.`,
    price: 12,
  },
  {
    image: careImage,
    productId: "house-blend",
    title: "House blend",
    description: `Two methods are primarily used to process coffee berries. The first, "wet" or "washed" process, has historically usually been carried out in Central America and areas of Africa. The flesh of the cherries is separated from the seeds and then the seeds are fermented – soaked in water for about two days. This softens the mucilage, which is a sticky pulp residue that is still attached to the seeds. Then this mucilage is washed off with water.`,
    price: 14,
  },
  {
    image: eyebrowsImage,
    productId: "light-roast",
    title: "Light roast",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    price: 13,
  },
  {
    image: perfectbrowsImage,
    productId: "medium-roast",
    title: "Medium roast",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 11,
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