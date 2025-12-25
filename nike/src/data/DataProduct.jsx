import product1 from "../assets/product/NIKE+P-6000+SE.png";
import product from "../assets/product/image (14).png";

export const DataProducts = [
  {
    title: "Men's Slim Fit T-Shirt",
    category: ["Men", "T-Shirts", "Casual"],
    product: [
      {
        img: product1,
        subImage: [],
        price: 29.99,
        discount: 15,
        code: "TSH001-BL",
        color: "Black",
      },
      {
        img: product,
        subImage: [],
        price: 29.99,
        discount: 15,
        code: null,
        color: "White",
      },
      {
        img: product1,
        subImage: [],
        price: 29.99,
        discount: 15,
        code: "TSH001-GY",
        color: "Gray",
      },
    ],
  },
  {
    title: "Women's Floral Sundress",
    category: ["Women", "Dresses", "Summer"],
    product: [
      {
        img: product,
        subImage: [],
        price: 49.99,
        discount: 20,
        code: "DRS002-FL",
        color: "Blue",
      },
      {
        img: product1,
        subImage: [],
        price: 49.99,
        discount: 20,
        code: "DRS002-PK",
        color: "Pink",
      },
    ],
  },
  // ... continue the same pattern for all other items
  {
    title: "Men's Denim Jeans",
    category: ["Men", "Pants", "Denim"],
    product: [
      {
        img: product1,
        subImage: [],
        price: 79.99,
        discount: 25,
        code: "JNS004-BL",
        color: "Dark Blue",
      },
      {
        img: product,
        subImage: [],
        price: 79.99,
        discount: 25,
        code: "JNS004-LB",
        color: "Light Blue",
      },
    ],
  },
  // Apply the same change to Women's Hoodie, Leather Jacket, Active Leggings, etc.
];
