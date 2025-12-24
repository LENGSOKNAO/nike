import React, { useState } from "react";
import { DataProducts } from "../../data/DataProduct";

const ListProducts = () => {
  const [activeIndexes, setActiveIndexes] = useState([0, 0]);

  return (
    <div className="grid grid-cols-3 gap-3">
      {DataProducts.map((category, categoryIndex) => {
        const activeIndex = activeIndexes[categoryIndex];
        const activeProduct = category.product[activeIndex];

        return (
          <div key={categoryIndex} className="">
            {/* Image */}
            <img src={activeProduct.img} alt="product" className="" />

            <div className="flex justify-center gap-4">
              {category.product.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="w-10 h-10 rounded-full cursor-pointer border"
                  onMouseEnter={() => {
                    const newIndexes = [...activeIndexes];
                    newIndexes[categoryIndex] = productIndex;
                    setActiveIndexes(newIndexes);
                  }}
                  style={{
                    backgroundColor: getColor(product.color),
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const getColor = (color) => {
  if (color.includes("Black")) return "#000";
  if (color.includes("White")) return "#fff";
  if (color.includes("Blue")) return "#3b82f6";
  return "#999";
};

export default ListProducts;
