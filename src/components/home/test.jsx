import React, { useState } from "react";
import { DataProducts } from "../../data/DataProduct";
import { SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

// Main category navigation (top horizontal scroll on mobile)
const MainCategories = [
  "Shoes",
  "Jordan",
  "Hoodies and Pullovers",
  "Pants and Tights",
  "Jackets & Vests",
  "Tops and T-Shirts",
  "Shorts",
  "Sportswear",
  "Swimwear",
  "Skirts and Dresses",
  "Jumpsuits and Rompers",
  "Tracksuits",
  "Socks",
  "Accessories and Equipment",
];

// Filter options
const GenderOptions = ["Men", "Women", "Unisex"];
const ProductTypeOptions = [
  "T-Shirts",
  "Shoes",
  "Hoodies",
  "Pants",
  "Jackets",
  "Shorts",
  "Tracksuits",
];
const StyleOptions = ["Casual", "Sport", "Lifestyle", "Running", "Basketball"];

const ListProducts = () => {
  // Hover state for color variants
  const [hoveredVariant, setHoveredVariant] = useState(
    new Array(DataProducts.length).fill(0)
  );

  const [showFilter, setShowFilter] = useState(true);

  // Selected filters
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);

  // Open sections in sidebar
  const [openSections, setOpenSections] = useState({
    gender: true,
    type: true,
    style: true,
  });

  // Show more/less per section
  const [showAll, setShowAll] = useState({});

  // Filter logic: product must match ALL selected filters in its category array
  const filteredProducts = DataProducts.filter((product) => {
    const matchesGender =
      selectedGender.length === 0 ||
      selectedGender.some((g) => product.category.includes(g));

    const matchesType =
      selectedType.length === 0 ||
      selectedType.some((t) => product.category.includes(t));

    const matchesStyle =
      selectedStyle.length === 0 ||
      selectedStyle.some((s) => product.category.includes(s));

    return matchesGender && matchesType && matchesStyle;
  });

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

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleShowAll = (section) => {
    setShowAll((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const FilterSection = ({
    title,
    items,
    selected,
    setSelected,
    sectionKey,
  }) => {
    const visible = showAll[sectionKey] ? items : items.slice(0, 6);

    const handleChange = (item) => {
      setSelected((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };

    return (
      <div className="border-t pt-6 pb-8">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex justify-between items-center text-lg font-medium mb-4"
        >
          {title}
          {openSections[sectionKey] ? <ChevronUp /> : <ChevronDown />}
        </button>

        {openSections[sectionKey] && (
          <div className="space-y-3">
            {visible.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => handleChange(item)}
                  className="w-5 h-5 accent-black rounded"
                />
                <span className="text-base">{item}</span>
              </label>
            ))}

            {items.length > 6 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleShowAll(sectionKey);
                }}
                className="text-sm text-gray-600 hover:text-black mt-2"
              >
                {showAll[sectionKey]
                  ? "- Show Less"
                  : `+ ${items.length - 6} More`}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="">
      {/* Mobile Header */}
      <div className="lg:hidden px-[2%] py-4">
        <h2 className="text-2xl font-medium">Shop All Sale</h2>
        <ul className="flex gap-6 overflow-x-auto hide-scrollbar-x py-4">
          {MainCategories.map((cat, i) => (
            <li key={i} className="shrink-0 text-lg hover:text-black/60">
              <Link to="#">{cat}</Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center border-t border-black/10 py-4">
          <span className="text-lg text-black/60">
            {filteredProducts.length} Results
          </span>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 border rounded-full px-5 py-2"
          >
            Filter <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block px-[2%] py-6 bg-white border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">
            Shop All Sale ({filteredProducts.length})
          </h2>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-3 text-xl"
          >
            {showFilter ? "Hide" : "Show"} Filters
            <SlidersHorizontal size={24} />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar - Desktop */}
        {showFilter && (
          <div className="hidden lg:block w-80 sticky top-20 h-screen overflow-y-auto py-8 px-6 border-r">
            <h3 className="text-xl font-semibold mb-6">Filters</h3>

            <FilterSection
              title="Gender"
              items={GenderOptions}
              selected={selectedGender}
              setSelected={setSelectedGender}
              sectionKey="gender"
            />

            <FilterSection
              title="Product Type"
              items={ProductTypeOptions}
              selected={selectedType}
              setSelected={setSelectedType}
              sectionKey="type"
            />

            <FilterSection
              title="Style"
              items={StyleOptions}
              selected={selectedStyle}
              setSelected={setSelectedStyle}
              sectionKey="style"
            />
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1 px-[2%] py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-center text-xl text-gray-500 py-20">
                No products found matching your filters.
              </p>
            ) : (
              filteredProducts.map((product, idx) => {
                const activeVariant = product.product[hoveredVariant[idx] || 0];

                return (
                  <div key={idx} className="group">
                    <div className="overflow-hidden bg-gray-100">
                      <img
                        src={activeVariant.img}
                        alt={product.title}
                        className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5">
                      {/* Color Swatches */}
                      <div className="flex gap-2 mb-4">
                        {product.product.map((variant, vIdx) => (
                          <div
                            key={vIdx}
                            onMouseEnter={() => {
                              const newHover = [...hoveredVariant];
                              newHover[idx] = vIdx;
                              setHoveredVariant(newHover);
                            }}
                            className="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer hover:border-black"
                            style={{ backgroundColor: getColor(variant.color) }}
                          />
                        ))}
                      </div>

                      <h3 className="font-medium text-lg">{product.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {product.category.join(" • ")}
                      </p>

                      <div className="mt-4 flex items-center gap-4 flex-wrap">
                        <span className="font-bold text-xl">
                          $
                          {(
                            (activeVariant.price *
                              (100 - activeVariant.discount)) /
                            100
                          ).toFixed(2)}
                        </span>
                        {activeVariant.discount > 0 && (
                          <>
                            <del className="text-gray-500">
                              ${activeVariant.price.toFixed(2)}
                            </del>
                            <span className="text-green-600 font-medium">
                              {activeVariant.discount}% off
                            </span>
                          </>
                        )}
                      </div>

                      {activeVariant.code && (
                        <p className="text-sm text-green-600 mt-2">
                          Extra {activeVariant.discount}% off with code{" "}
                          {activeVariant.code}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
