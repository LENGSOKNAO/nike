import React from "react";
import Card from "./card/Card";

const navList = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    subMenu: [
      { title: "Men", path: "/shop/men" },
      { title: "Women", path: "/shop/women" },
      { title: "Kids", path: "/shop/kids" },
    ],
  },
  {
    id: 3,
    title: "New Arrivals",
    path: "/new",
    subMenu: [
      { title: "Men", path: "/shop/men" },
      { title: "Women", path: "/shop/women" },
      { title: "Kids", path: "/shop/kids" },
    ],
  },
  {
    id: 4,
    title: "Sale",
    path: "/sale",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    subMenu: [
      { title: "Men", path: "/shop/men" },
      { title: "Women", path: "/shop/women" },
      { title: "Kids", path: "/shop/kids" },
    ],
  },
];

const dashboard = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    subMenu: [
      { title: "Electronics", path: "/products/electronics" },
      { title: "Books", path: "/products/books" },
      { title: "Furniture", path: "/products/furniture" },
    ],
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    subMenu: [
      { title: "Tech", path: "/blog/tech" },
      { title: "Lifestyle", path: "/blog/lifestyle" },
      { title: "Travel", path: "/blog/travel" },
    ],
  },
 
];

const UsingProps = () => {
  return (
    <div className="">
      <Card data={navList} />
      <p className="py-10"></p>
      <Card data={dashboard} />
    </div>
  );
};

export default UsingProps;
