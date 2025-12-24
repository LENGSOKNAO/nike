import React, { useState } from "react";
import { DataProducts } from "../../data/DataProduct";
import { FiFilter } from "react-icons/fi";
import { ChevronDown, Sliders, SlidersHorizontal } from "lucide-react";

const ListProducts = () => {
  const [isProduct, setIsProduct] = useState([0, 0]);

  const getColor = (color) => {
    const lowerColor = color.toLowerCase(); // Make it case-insensitive

    if (lowerColor.includes("black")) return "#000000"; // Black
    if (lowerColor.includes("white")) return "#FFFFFF"; // White
    if (lowerColor.includes("gray") || lowerColor.includes("grey"))
      return "#808080"; // Gray
    if (lowerColor.includes("blue")) return "#3B82F6"; // Blue (Tailwind blue-500)
    if (lowerColor.includes("red")) return "#EF4444"; // Red
    if (lowerColor.includes("green")) return "#10B981"; // Green
    if (lowerColor.includes("yellow")) return "#FBBF24"; // Yellow
    if (lowerColor.includes("pink")) return "#EC4899"; // Pink
    if (lowerColor.includes("purple")) return "#8B5CF6"; // Purple
    if (lowerColor.includes("orange")) return "#F97316"; // Orange
    if (lowerColor.includes("beige")) return "#F5F5DC"; // Beige
    if (lowerColor.includes("brown")) return "#92400E"; // Brown
    if (lowerColor.includes("navy")) return "#1E40AF"; // Navy Blue
    if (lowerColor.includes("light blue") || lowerColor.includes("sky"))
      return "#0EA5E9"; // Light/Sky Blue
    if (lowerColor.includes("dark blue")) return "#1E293B"; // Dark Blue
    if (lowerColor.includes("mint")) return "#6EE7B7"; // Mint Green
    if (lowerColor.includes("lavender")) return "#C4B5FD"; // Lavender
    if (lowerColor.includes("olive")) return "#84CC16"; // Olive Green
    if (lowerColor.includes("maroon")) return "#7F1D1D"; // Maroon
    if (lowerColor.includes("teal")) return "#14B8A6"; // Teal
    if (lowerColor.includes("gold")) return "#EAB308"; // Gold
    if (lowerColor.includes("silver")) return "#94A3B8"; // Silver

    // Default fallback color if no match
    return "#999999";
  };

  return (
    <div className="px-[2%]">
      {/* top */}
      <div className="flex justify-between px-[2%] py-5">
        <h2 className="text-2xl font-medium">
          {" "}
          Shop All Sale ({DataProducts.length})
        </h2>
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-2">
            <h2 className="text-xl">Hide Filter</h2>
            <SlidersHorizontal />
          </div>
          <div className="flex items-center">
            <h2 className="text-xl"> Shop By </h2>
            <ChevronDown />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="">
        <div className="grid grid-cols-3 gap-2">
          {DataProducts.map((e, i) => {
            const isProducts = isProduct[i] ?? 0;
            const productActive = e.product[isProducts];

            return (
              <div key={i} className="">
                <img
                  src={productActive.img}
                  className="w-full object-cover"
                  alt=""
                />
                <div className="py-5">
                  <div className="flex gap-1 ">
                    {e.product.map((e, index) => (
                      <div
                        onMouseEnter={() => {
                          const newData = [...isProduct];
                          newData[i] = index;
                          setIsProduct(newData);
                        }}
                        className="w-4 h-4 border border-black/20 cursor-pointer rounded-full"
                        style={{
                          backgroundColor: getColor(e.color),
                        }}
                      ></div>
                    ))}
                  </div>
                  <h2 className="text-md font-medium "> {e.title} </h2>
                  <ul className="flex gap-1 py-2 text-md font-medium text-black/50">
                    {e.category.map((e, i) => (
                      <li>{e}</li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 mt-2">
                    {/* Final price after discount - BIG and GREEN */}
                    <span className="text-xl font-semibold text-green-600">
                      {(
                        (productActive.price * (100 - productActive.discount)) /
                        100
                      ).toFixed(2)}{" "}
                      $
                    </span>

                    {productActive.discount > 0 && (
                      <del className="text-sm text-gray-500">
                        {productActive.price} $
                      </del>
                    )}

                    <h2>
                      {productActive.code == null
                        ? `${productActive.discount}Off`
                        : `Extra${productActive.discount} % Off ${productActive.code}`}
                    </h2>
                  </div>

                  <h2></h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
