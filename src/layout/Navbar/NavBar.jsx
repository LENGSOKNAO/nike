import React, { useEffect, useState, useRef } from "react";
import { CiBag1, CiHeart, CiSearch } from "react-icons/ci";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { DataNavlist } from "../../model/DataNavlist";
import { DataPopular } from "../../model/popular";
import { listFooter } from "../../model/ListFooter";
import logo from "../../assets/logo.png";
import { DataProducts } from "../../data/DataProduct";

const NavBar = () => {
  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(null); // null or index for mobile submenu
  const [isSubMenu, setIsSubMenu] = useState(null); // for deeper submenus
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [isHoverMenu, setIsHoverMenu] = useState(false);

  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Auto-focus search input when mobile search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Filter products based on search query
  const filteredProducts = DataProducts.filter((p) => {
    if (!searchQuery.trim()) return true;
    const words = searchQuery.trim().toLowerCase().split(/\s+/);
    return words.every((word) => {
      const inTitle = p.title.toLowerCase().includes(word);
      const inColor = p.product.some((e) =>
        e.color.toLowerCase().includes(word)
      );
      const inCategory = p.category.some((e) => e.toLowerCase().includes(word));
      return inTitle || inColor || inCategory;
    });
  });

  // Extract top matching categories
  const topCategories = searchQuery.trim()
    ? [
        ...new Set(
          filteredProducts.flatMap((p) =>
            p.category.filter((cat) =>
              cat.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
          )
        ),
      ]
    : [];

  // Handle search submission (Enter key or button)
  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return;

    // Update recent searches
    const updated = recentSearches.filter(
      (item) => item.toLowerCase() !== searchQuery.toLowerCase()
    );
    const newSearches = [searchQuery, ...updated].slice(0, 10);
    setRecentSearches(newSearches);
    localStorage.setItem("recentSearches", JSON.stringify(newSearches));

    // Navigate smoothly (no page reload)
    navigate(`/sale?q=${encodeURIComponent(searchQuery)}`);

    // Close search
    closeSearch();
  };

  // Remove a recent search
  const removeRecentSearch = (index) => {
    const updated = recentSearches.filter((_, i) => i !== index);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  // Search controls
  const openSearch = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    document.body.style.overflow = "";
  };

  // Mobile menu controls
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsListOpen(null);
    setIsSubMenu(null);
    document.body.style.overflow = "";
  };

  // Highlight matching text in results
  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.trim()})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="font-bold text-black">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* Top info bar - visible only on large screens */}
      <div className="hidden lg:block bg-gray-200 px-4 py-2">
        <div className="flex justify-end gap-4">
          {listFooter.map((item, i) => (
            <div
              key={i}
              className={`flex items-center text-sm font-semibold ${
                i !== 0
                  ? "before:content-[''] before:w-px before:h-3 before:mx-3 before:bg-black"
                  : ""
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Mobile View */}
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          <div className="flex items-center gap-5 text-2xl">
            <CiSearch onClick={openSearch} className="cursor-pointer" />
            <CiHeart className="cursor-pointer" />
            <CiBag1 className="cursor-pointer" />
            <Menu onClick={toggleMenu} className="cursor-pointer" />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between px-8 py-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          <ul className="flex gap-10 text-lg font-semibold">
            {DataNavlist.map((item, i) => (
              <li
                key={i}
                className="relative"
                onMouseEnter={() => setIsHoverMenu(i)}
                onMouseLeave={() => setIsHoverMenu(false)}
              >
                <Link to={item.link}>{item.title}</Link>
                {/* You can expand this dropdown later */}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 text-2xl">
            <div
              onClick={openSearch}
              className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full cursor-pointer"
            >
              <CiSearch />
              <span className="text-sm font-medium">Search</span>
            </div>
            <CiHeart className="cursor-pointer" />
            <CiBag1 className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4">
              <CiSearch className="text-xl text-gray-600" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                placeholder="Search products..."
                className="w-full py-3 px-4 outline-none bg-transparent text-lg"
                enterKeyHint="search"
              />
            </div>
            <button
              onClick={closeSearch}
              className="ml-4 text-lg font-medium text-gray-700"
            >
              Cancel
            </button>
          </div>

          {/* Results / Suggestions */}
          <div className="flex-1 overflow-y-auto p-5">
            {searchQuery.trim() === "" || filteredProducts.length === 0 ? (
              <>
                {/* Popular Searches */}
                <div className="mb-10">
                  <h3 className="text-sm font-medium text-gray-600 mb-4">
                    Popular Search Terms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {DataPopular.map((term, i) => (
                      <Link
                        key={i}
                        to={`/sale?q=${encodeURIComponent(term.name)}`}
                        onClick={closeSearch}
                        className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full text-base font-medium"
                      >
                        {term.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-4">
                      Recent Searches
                    </h3>
                    <div className="space-y-3">
                      {recentSearches.map((term, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2"
                        >
                          <Link
                            to={`/sale?q=${encodeURIComponent(term)}`}
                            onClick={closeSearch}
                            className="text-lg"
                          >
                            {term}
                          </Link>
                          <button onClick={() => removeRecentSearch(i)}>
                            <X className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Top Categories */}
                {topCategories.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-700 mb-4">
                      Top Categories
                    </h3>
                    <div className="space-y-3">
                      {topCategories.map((cat, i) => (
                        <div key={i} className="text-lg">
                          {highlightMatch(cat, searchQuery)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Results */}
                <div className="grid grid-cols-2 gap-6">
                  {filteredProducts
                    .flatMap((p) =>
                      p.product.map((variant) => ({
                        ...variant,
                        title: p.title,
                        category: p.category,
                      }))
                    )
                    .slice(0, 6)
                    .map((item, i) => (
                      <div key={i} className="space-y-2">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <h4 className="font-medium text-lg">{item.title}</h4>
                        <p className="text-gray-600">
                          {item.category.join(", ")}
                        </p>
                        <p className="font-medium text-lg">${item.price}</p>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white z-50 overflow-y-auto shadow-2xl">
            <div className="flex justify-end p-5">
              <X onClick={closeMenu} className="w-8 h-8 cursor-pointer" />
            </div>

            <ul className="px-5">
              {DataNavlist.map((item, i) => (
                <li key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => setIsListOpen(isListOpen === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-xl font-medium"
                  >
                    {item.title}
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Submenu Level 1 */}
                  {isListOpen === i && (
                    <div className="pb-5">
                      <button
                        onClick={() => setIsListOpen(null)}
                        className="flex items-center gap-2 text-lg mb-4"
                      >
                        <ChevronLeft className="w-6 h-6" />
                        Back
                      </button>
                      <Link
                        to={item.link}
                        onClick={closeMenu}
                        className="block py-3 text-xl font-semibold"
                      >
                        {item.title} Overview
                      </Link>
                      {item.list.map((category, idx) => (
                        <div key={idx} className="mt-4">
                          <button
                            onClick={() =>
                              setIsSubMenu(
                                isSubMenu === `${i}-${idx}`
                                  ? null
                                  : `${i}-${idx}`
                              )
                            }
                            className="w-full flex items-center justify-between py-3 text-lg font-medium"
                          >
                            {category.listSub[0]?.title || "Category"}
                            {isSubMenu === `${i}-${idx}` ? (
                              <ChevronDown />
                            ) : (
                              <ChevronRight />
                            )}
                          </button>
                          {isSubMenu === `${i}-${idx}` &&
                            category.listSub[0]?.listSub?.map(
                              (subItem, subIdx) => (
                                <div
                                  key={subIdx}
                                  className="ml-6 py-2 text-base text-gray-700"
                                >
                                  {subItem.name}
                                </div>
                              )
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
