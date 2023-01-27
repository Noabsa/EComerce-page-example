import { v4 as uuid } from "uuid";
export const productCards = [
  {
    product: "Neo-Orange sneakers",
    price: 47.5,
    category: "Neo",
    bestSeller: false,
    image: "img/IMG-01.jpg",
    onSale: true,
    id: uuid(),
  },
  {
    product: "Neo-Blue sneakers",
    price: 32.5,
    category: "Neo",
    bestSeller: true,
    image: "img/IMG-04.jpg",
    onSale: true,
    id: uuid(),
  },
  {
    product: "Earth-Brown sneakers",
    price: 53.9,
    category: "Earth",
    bestSeller: true,
    image: "img/IMG-06.jpg",
    onSale: false,
    id: uuid(),
  },
  {
    product: "Clear-Orange sneakers",
    price: 51.5,
    category: "Clear",
    bestSeller: false,
    image: "img/IMG-07.jpg",
    onSale: true,
    id: uuid(),
  },
  {
    product: "Neo-Lime sneakers",
    price: 92.5,
    category: "Neo",
    bestSeller: true,
    image: "img/IMG-08.jpg",
    onSale: false,
    id: uuid(),
  },
  {
    product: "Soft-Rainbow sneakers",
    price: 24.5,
    category: "Soft",
    bestSeller: true,
    image: "img/IMG-10.jpg",
    onSale: true,
    id: uuid(),
  },
];
/*export const bestSeller = productCards.filter((product, i) => {
  return product.bestSeller === true;
});*/
