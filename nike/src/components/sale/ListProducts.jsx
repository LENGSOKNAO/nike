import React, { useState } from "react";
import { DataProducts } from "../../data/DataProduct";
import { FiFilter } from "react-icons/fi";
import {
  ChevronDown,
  ChevronUp,
  Sliders,
  SlidersHorizontal,
} from "lucide-react";

const Shose = [
  "Shoes",
  "Jordan",
  "Hodies and Pullovers",
  "pants and Tights",
  "Jackets & Vests",
  "Tops and T-Shirts",
  "Shorts",
  "Sports",
  "Swimwear",
  "Skirts and Diesses",
  "Jumpsuits and Rowpers",
  "Tracksuits",
  "Compression and Baselayer",
  "Socks",
  "Accessories and Equiment",
];

const Brand = ["Nike Sportswar", "Jordan", "NikeLab", "ACG", "NikePro"];

const Sport = [
  "Lifestyle",
  "Running",
  "Training & Gym",
  "Yoga",
  "Basketball",
  "Football",
  "Soccer",
  "Baseball",
  "Golf",
  "Skateboarding",
  "Tennis",
  "Track & Field",
  "Lacrosse",
  "Walking",
  "Outdoor",
  "Volleyball",
  "Swimming",
  "Gymnastics",
  "Hiking",
  "Dance",
  "Cheerleading",
  "Cycling",
];

const Best = [
  "Warm Weather",
  "Wet Weather Conditions",
  "Cold Weather",
  "Dry Weather Conditions",
];

const Gender = ["Men", "Women", "Unisex"];
const Kids = ["Boys", "Girls"];

const ListProducts = () => {
  const [isProduct, setIsProduct] = useState([0, 0]);
  const [checked, setChecked] = useState([]);
  const [brand, setBrand] = useState(false);
  const [sport, setSport] = useState(false);
  const [gender, setGender] = useState(false);
  const [best, setBest] = useState(false);
  const [kids, setKids] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleBrands = showAll ? Brand : Brand.slice(0, 4);
  const visibleSport = showAll ? Sport : Sport.slice(0, 4);
  const visibleBest = showAll ? Best : Best.slice(0, 4);
  const visibleGenders = showAll ? Gender : Gender.slice(0, 4);
  const visibleKids = showAll ? Kids : Kids.slice(0, 4);

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
    <div className=" ">
      {/* top */}
      <div className="flex justify-between px-[2%] sticky top-0 z-10 bg-white py-5">
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
      {/*  */}
      <div className="flex">
        {/* left */}
        <div className="hidden lg:block sticky top-20 py-10 min-w-60 h-220 overflow-y-auto overflow-hidden">
          <div className="">
            <ul className="px-10">
              {Shose.map((e, i) => (
                <li className="text-[16px] py-1 font-medium">{e}</li>
              ))}
              {/* brand */}
              <ListProps
                click={() => setBrand(!brand)}
                showName={"Brand"}
                icon={brand}
                alldata={Brand}
                listData={visibleBrands}
                nameMore={showAll}
                clickMore={(event) => {
                  event.stopPropagation();
                  setShowAll(!showAll);
                }}
              />
              {/* sport */}
              <ListProps
                click={() => setSport(!sport)}
                showName={"Sport"}
                icon={sport}
                alldata={Sport}
                listData={visibleSport}
                nameMore={showAll}
                clickMore={(event) => {
                  event.stopPropagation();
                  setShowAll(!showAll);
                }}
              />
              {/* best */}
              <ListProps
                click={() => setBest(!best)}
                showName={"Best For"}
                icon={best}
                alldata={Best}
                listData={visibleBest}
                nameMore={showAll}
                clickMore={(event) => {
                  event.stopPropagation();
                  setShowAll(!showAll);
                }}
              />
              {/* gender */}
              <ListProps
                click={() => setGender(!gender)}
                showName={"Gender"}
                icon={gender}
                alldata={Gender}
                listData={visibleGenders}
                nameMore={showAll}
                clickMore={(event) => {
                  event.stopPropagation();
                  setShowAll(!showAll);
                }}
              />
              {/* kids */}
              <ListProps
                click={() => setKids(!kids)}
                showName={"Kids"}
                icon={kids}
                alldata={Kids}
                listData={visibleKids}
                nameMore={showAll}
                clickMore={(event) => {
                  event.stopPropagation();
                  setShowAll(!showAll);
                }}
              />
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="px-[2%]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
                    <div className="flex gap-1 pb-2 ">
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
                    <h2 className="text-md font-medium"> {e.title} </h2>
                    <ul className="flex gap-1 py-1 text-md font-medium text-black/50">
                      {e.category.map((e, i) => (
                        <li>{e}</li>
                      ))}
                    </ul>

                    <div className="flex items-center flex-wrap gap-x-3 py-1">
                      <span className="text-md font-semibold ">
                        {(
                          (productActive.price *
                            (100 - productActive.discount)) /
                          100
                        ).toFixed(2)}
                        $
                      </span>

                      {productActive.discount > 0 && (
                        <del className="text-md font-medium text-gray-500">
                          {productActive.price} $
                        </del>
                      )}

                      <h2 className="text-md font-medium text-green-600">
                        {productActive.discount} % Off
                      </h2>
                    </div>
                    <h2 className="text-md font-medium text-green-600">
                      {productActive.code == null
                        ? null
                        : `Extra ${productActive.discount} % Off ${productActive.code}`}
                    </h2>

                    <h2></h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;

const ListProps = ({
  click,
  showName,
  icon,
  listData,
  nameMore,
  clickMore,
  alldata,
}) => {
  const [checked, setChecked] = useState([]);

  return (
    <div className="border-t  pt-4 border-black/10 text-lg font-medium">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={click}>
        {showName}
        {icon ? <ChevronUp /> : <ChevronDown />}
      </div>

      {/* List Items */}
      <div className="py-2">
        {icon &&
          listData.map((item, i) => (
            <li
              key={i}
              className="text-[16px] py-1 font-medium flex items-start  gap-2 cursor-pointer hover:text-black/80"
            >
              <input
                type="checkbox"
                checked={checked.includes(item)}
                onChange={(event) => {
                  event.stopPropagation();
                  setChecked((prev) =>
                    prev.includes(item)
                      ? prev.filter((i) => i !== item)
                      : [...prev, item]
                  );
                }}
                className="min-w-5 min-h-5 cursor-pointer accent-black"
              />
              {item}
            </li>
          ))}

        {/* Show More / Less Button */}
        {icon && alldata.length > 4 && (
          <button
            onClick={clickMore}
            className="font-normal mt-2 text-lg text-black/80 cursor-pointer"
          >
            {nameMore ? "- Less" : "+ More"}
          </button>
        )}
      </div>
    </div>
  );
};
