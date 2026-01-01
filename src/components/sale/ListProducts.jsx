import React, { useState } from "react";
import { DataProducts } from "../../data/DataProduct";
import { FiFilter } from "react-icons/fi";
import {
  ChevronDown,
  ChevronUp,
  Sliders,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router";

const Shose = [
  "Shoes",
  "Jordan",
  "Hodies and Pullovers",
  "Pants and Tights",
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
  const [showFilter, setShowFilter] = useState(true);
  const [brand, setBrand] = useState(false);
  const [sport, setSport] = useState(false);
  const [gender, setGender] = useState(false);
  const [best, setBest] = useState(false);
  const [kids, setKids] = useState(false);
  const [showAll, setShowAll] = useState(false);
  // selsct
  const [selectStort, setSelectStort] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);

  const visibleBrands = showAll ? Brand : Brand.slice(0, 4);
  const visibleSport = showAll ? Sport : Sport.slice(0, 4);
  const visibleBest = showAll ? Best : Best.slice(0, 4);
  const visibleGenders = showAll ? Gender : Gender.slice(0, 4);
  const visibleKids = showAll ? Kids : Kids.slice(0, 4);

  const getColor = (colorName) => {
    const lower = colorName.toLowerCase();
    const map = {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#808080",
      grey: "#808080",
      blue: "#3B82F6",
      red: "#EF4444",
      green: "#10B981",
      yellow: "#FBBF24",
      pink: "#EC4899",
      purple: "#8B5CF6",
      orange: "#F97316",
      navy: "#1E40AF",
    };
    for (const [key, value] of Object.entries(map)) {
      if (lower.includes(key)) return value;
    }
    return "#999999";
  };

  const filterData = DataProducts.filter((p) => {
    const category =
      selectStort.length > 0
        ? selectStort.some((s) => p.category.includes(s))
        : false;

    const brand =
      selectBrand.length > 0
        ? selectBrand.some((b) => p.brand.includes(b))
        : false;

    if (!selectBrand.length > 0 && !selectStort.length > 0) return true;
    return category || brand;
  });

  return (
    <div className="">
      {/* top */}
      {/* top lg screen */}
      <div className="lg:hidden">
        <h2 className="text-2xl font-medium px-[2%]"> Shop All Sale</h2>
        <ul className="flex gap-5 px-[2%] overflow-x-scroll hide-scrollbar-x">
          {Shose.map((e, i) => (
            <li
              key={i}
              className="shrink-0 font-medium text-[1rem] py-5 hover:text-black/60"
            >
              <Link>{e}</Link>
            </li>
          ))}
        </ul>
        <div className="px-[2%] flex justify-between border-t border-black/10 py-5">
          <h2 className="text-lg font-medium text-black/50">
            {" "}
            {DataProducts.length} Results{" "}
          </h2>
          <div className="">
            <div className="flex border border-black/10 gap-2 rounded-full px-5 py-1">
              Filtter <SlidersHorizontal />
            </div>
          </div>
        </div>
      </div>
      {/* top full scren */}
      <div className="hidden lg:block ">
        <div className="flex justify-between px-[2%] bg-white py-5">
          <h2 className="text-2xl font-medium">
            {" "}
            Shop All Sale ({DataProducts.length})
          </h2>
          <div className="flex items-center gap-x-10">
            <div
              onClick={() => setShowFilter(!showFilter)}
              className="cursor-pointer flex items-center gap-2"
            >
              <h2 className="text-xl">{showFilter ? "Hide" : "Show"} Filter</h2>
              <SlidersHorizontal />
            </div>
            <div className="flex items-center">
              <h2 className="text-xl"> Shop By </h2>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex">
        {/* left */}
        {showFilter && (
          <div className="hidden lg:block">
            <div className="sticky top-20 py-10 min-w-60 h-220 overflow-y-auto overflow-hidden">
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
                    selected={selectBrand}
                    setSelect={setSelectBrand}
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
                    selected={selectStort}
                    alldata={Sport}
                    setSelect={setSelectStort}
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
                    selected={selectStort}
                    setSelect={setSelectStort}
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
                    selected={selectStort}
                    setSelect={setSelectStort}
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
                    selected={selectStort}
                    setSelect={setSelectStort}
                    nameMore={showAll}
                    clickMore={(event) => {
                      event.stopPropagation();
                      setShowAll(!showAll);
                    }}
                  />
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* right */}
        <div className="lg:px-[2%] w-full">
          {filterData.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {filterData.map((e, i) => {
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
          ) : (
            <div className="flex items-center justify-center w-full h-full py-10">
              <p className="mt-4 text-gray-500">No products available</p>
            </div>
          )}
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
  selected,
  listData,
  nameMore,
  clickMore,
  setSelect,
  alldata,
}) => {
  const [checked, setChecked] = useState([]);
  const handleChange = (items) => {
    setSelect((e) =>
      e.includes(items) ? e.filter((i) => i !== items) : [...e, items]
    );
  };

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
                checked={selected.includes(item)}
                onChange={() => handleChange(item)}
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
