import React, { useEffect, useRef, useState } from "react";
import { CiBag1, CiHeart, CiSearch } from "react-icons/ci";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Fixed import
import { DataNavlist } from "../../model/DataNavlist";
import { DataPopular } from "../../model/popular";
import { listFooter } from "../../model/ListFooter";
import logo from "../../assets/logo.png";
import { DataProducts } from "../../data/DataProduct";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isSearching, setIsSearching] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const searchInputRef = useRef(null);
  const navigate = useNavigate(); // For smooth navigation instead of window.location

  const styleSmallBar =
    "absolute top-0 right-0 bottom-0 w-85 h-screen bg-white px-5";
  const btnHover = "hover:bg-gray-200 p-2 rounded-4xl cursor-pointer";

  const handleSearching = (e) => {
    setIsSearching(e.target.value);
  };

  const productSearch = DataProducts.filter((p) => {
    const search = isSearching.trim().toLowerCase();
    if (!search) return true;
    const words = search.split(/\s+/);
    return words.every((word) => {
      const inTitle = p.title.toLowerCase().includes(word);
      const inColor = p.product.some((e) =>
        e.color.toLowerCase().includes(word)
      );
      const inCategory = p.category.some((e) => e.toLowerCase().includes(word));
      return inTitle || inColor || inCategory;
    });
  });

  const search = isSearching.trim().toLowerCase();
  const topCategories =
    search === ""
      ? []
      : [
          ...new Set(
            productSearch.flatMap((p) =>
              p.category.filter((cat) => cat.toLowerCase().startsWith(search))
            )
          ),
        ];

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Auto focus search input when opening on mobile
  useEffect(() => {
    if (isSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearch]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isSearching.trim()) {
      const updated = recentSearches.filter(
        (item) => item.toLowerCase() !== isSearching.toLowerCase()
      );
      const newSearches = [isSearching, ...updated].slice(0, 10);
      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches));

      navigate(`/sale?q=${encodeURIComponent(isSearching)}`); // Smooth navigation
      closeSearch();
    }
  };

  const removeRecentSearch = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
    localStorage.setItem(
      "recentSearches",
      JSON.stringify(recentSearches.filter((_, i) => i !== index))
    );
  };

  const openSearch = () => {
    setIsSearch(true);
    document.body.style.overflow = "hidden";
  };

  const closeSearch = () => {
    setIsSearch(false);
    setIsSearching("");
    document.body.style.overflow = "";
  };

  const openSamllScreen = () => {
    setIsMenu(!isMenu);
    document.body.style.overflow = isMenu ? "" : "hidden";
  };

  const closeSamllScreen = () => {
    setIsMenu(false);
    setIsListOpen(false);
    setIsSubMenu(false);
    document.body.style.overflow = "";
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="text-lg font-normal text-black">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <div className={isSearch ? "hidden" : "hidden lg:block"}>
        <div className="bg-gray-200 px-[1%] py-2">
          <div className="flex justify-end">
            {listFooter.map((e, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${
                  i === 0
                    ? ""
                    : "before:content-[''] before:block before:w-[1px] before:h-3 before:bg-black"
                }`}
              >
                <p className="text-[14px] font-semibold px-2">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-2 bg-white">
        {/* Mobile */}
        <div className="lg:hidden relative">
          <div className="flex items-center justify-between px-[2%] py-2">
            <Link to="/">
              <img src={logo} className="w-20" alt="" />
            </Link>

            <div className="flex items-center gap-2 text-2xl">
              <div onClick={openSearch}>
                <CiSearch />
              </div>

              {isSearch && (
                <>
                  <div className="absolute top-0 right-0 z-10 left-0 bg-white">
                    <div className="flex items-center justify-between gap-5 px-3 py-3">
                      <div className="flex w-full flex-col items-center justify-center">
                        <div className="flex w-full items-center bg-black/3 hover:bg-black/5 rounded-full">
                          <div className="p-2 bg-black/3 hover:bg-black/10 cursor-pointer rounded-full">
                            <CiSearch />
                          </div>
                          <input
                            ref={searchInputRef}
                            type="text"
                            value={isSearching}
                            onChange={handleSearching}
                            onKeyDown={handleKeyPress}
                            className="outline-none border-none text-sm lg:text-lg w-[80%] font-medium"
                            placeholder="Search"
                            enterKeyHint="search"
                          />
                        </div>
                      </div>
                      <span
                        onClick={closeSearch}
                        className="text-sm lg:text-lg font-medium cursor-pointer"
                      >
                        Concel
                      </span>
                    </div>

                    <div className="w-full p-5">
                      {(isSearching.length === 0 ||
                        productSearch.length === 0) && (
                        <div className="w-full">
                          <div className="">
                            <h2 className="text-sm font-medium text-black/60">
                              Popular Search Terms
                            </h2>
                            <div className="flex gap-x-5 gap-y-2 flex-wrap py-5">
                              {DataPopular.map((e, i) => (
                                <div
                                  className="bg-black/5 hover:bg-black/10 px-5 py-1 text-lg font-medium rounded-full"
                                  key={i}
                                >
                                  <Link
                                    to={`/sale?q=${encodeURIComponent(e.name)}`}
                                    onClick={closeSearch}
                                  >
                                    {e.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="">
                            <h2 className="text-sm font-medium text-black/60">
                              Recent Searches
                            </h2>
                            <div className="">
                              {recentSearches.slice(0, 10).map((e, i) => (
                                <div
                                  className="text-black hover:text-black/80 py-1 text-lg font-medium rounded-full flex items-center justify-between"
                                  key={i}
                                >
                                  <Link
                                    to={`/sale?q=${encodeURIComponent(e)}`}
                                    onClick={closeSearch}
                                  >
                                    {e}
                                  </Link>
                                  <button
                                    onClick={() => removeRecentSearch(i)}
                                    className="hover:bg-black/30 rounded-full cursor-pointer"
                                  >
                                    <X />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {isSearching.length > 0 && productSearch.length > 0 && (
                      <div className="overflow-y-scroll h-200 pb-50">
                        <div className="px-3 flex flex-col gap-2 rounded">
                          <h2 className="font-medium text-black/70 text-sm">
                            Top Categories
                          </h2>
                          {topCategories.map((e, i) => (
                            <div key={i}>
                              <h2 className="text-lg font-normal text-black/70">
                                {highlightMatch(e, isSearching)}
                              </h2>
                            </div>
                          ))}
                        </div>

                        <div className="px-3 py-5">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-hidden">
                            {productSearch
                              .flatMap((main) =>
                                main.product.map((e) => ({
                                  img: e.img,
                                  title: main.title,
                                  price: e.price,
                                  category: main.category,
                                }))
                              )
                              .slice(0, 6)
                              .map((e, i) => (
                                <div key={i}>
                                  <div>
                                    <img
                                      src={e.img}
                                      className="w-full h-full object-cover rounded-sm"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2 py-5">
                                    <h2 className="text-[18px] font-medium">
                                      {e.title}
                                    </h2>
                                    <div className="text-[18px] text-black/70 font-medium flex flex-wrap">
                                      {e.category.map((cat, idx) => (
                                        <h2 key={idx}>{cat}</h2>
                                      ))}
                                    </div>
                                    <h2 className="text-[18px] font-medium">
                                      ${e.price}
                                    </h2>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              <CiHeart />
              <CiBag1 />
              <Menu onClick={openSamllScreen} />

              {isMenu && (
                <>
                  <div className="absolute top-0 right-0 left-0 bottom-0 h-screen bg-black/20"></div>
                  <div className={styleSmallBar}>
                    <div className="flex items-center justify-end py-5">
                      <button onClick={closeSamllScreen} className={btnHover}>
                        <X />
                      </button>
                    </div>
                    <ul>
                      {DataNavlist.map((e, i) => (
                        <React.Fragment key={i}>
                          <li className="flex items-center justify-between">
                            <button
                              onClick={() =>
                                setIsListOpen(isListOpen === i ? false : i)
                              }
                              className="text-2xl font-medium py-2 cursor-pointer"
                            >
                              {e.title}
                            </button>
                            <ChevronRight />
                          </li>

                          {isListOpen === i && (
                            <div className="fixed inset-0 z-50">
                              <div className={styleSmallBar}>
                                <div className="flex justify-between items-center py-5">
                                  <button
                                    onClick={() => setIsListOpen(false)}
                                    className="flex items-center text-lg cursor-pointer"
                                  >
                                    <ChevronLeft className="w-6 mr-2" />
                                    All
                                  </button>
                                  <div
                                    onClick={closeSamllScreen}
                                    className={btnHover}
                                  >
                                    <X />
                                  </div>
                                </div>
                                <div className="h-full overflow-y-auto pb-20">
                                  <h2 className="text-2xl font-medium py-4 cursor-pointer">
                                    <Link
                                      to={e.link}
                                      onClick={closeSamllScreen}
                                    >
                                      {e.title}
                                    </Link>
                                  </h2>
                                  {e.list.map((category, idx) => (
                                    <div
                                      key={idx}
                                      className="my-2 text-lg font-normal"
                                    >
                                      {category.listSub.map((sub, subIdx) => (
                                        <div
                                          key={subIdx}
                                          className="text-xl font-medium cursor-pointer"
                                        >
                                          <h2
                                            onClick={() =>
                                              setIsSubMenu(
                                                isSubMenu === `${idx}-${subIdx}`
                                                  ? false
                                                  : `${idx}-${subIdx}`
                                              )
                                            }
                                            className="flex items-center py-1 justify-between"
                                          >
                                            {sub.title}
                                            {isSubMenu ===
                                            `${idx}-${subIdx}` ? (
                                              <ChevronDown />
                                            ) : (
                                              <ChevronRight />
                                            )}
                                          </h2>
                                          {isSubMenu === `${idx}-${subIdx}` && (
                                            <div className="ml-4 mt-2">
                                              {sub.listSub.map(
                                                (item, idSub) => (
                                                  <div
                                                    key={idSub}
                                                    className="text-sm font-medium text-gray-600 hover:text-black py-2"
                                                  >
                                                    <h2>{item.name}</h2>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:hidden md:hidden lg:block">
          <div className="flex items-center justify-between px-[2%] py-2">
            <Link to="/" className="bg-transparent w-20">
              <img src={logo} className="object-cover w-full" alt="" />
            </Link>

            <div className="">
              <ul className="flex gap-5 text-md font-semibold">
                {DataNavlist.map((e, i) => (
                  <React.Fragment key={i}>
                    <li
                      onMouseEnter={() => setIsHoverMenu(i)}
                      onMouseLeave={() => setIsHoverMenu(false)}
                    >
                      <Link to={e.link} className="z-10">
                        {e.title}
                      </Link>
                      {isHoverMenu === i && (
                        <div className="bg-white absolute top-0 left-0 right-0 z-[-1] flex justify-center py-10">
                          <div
                            onMouseLeave={() => setIsHoverMenu(false)}
                            className="flex justify-center gap-[10%] w-[80%] mt-10"
                          >
                            {e.list.map((cat, idx) => (
                              <div key={idx} className="">
                                {cat.listSub.map((sub, subIdx) => (
                                  <div key={subIdx} className="pb-10">
                                    <h2 className="text-md font-medium pb-2">
                                      <Link>{sub.title}</Link>
                                    </h2>
                                    {sub.listSub.map((item, itemIdx) => (
                                      <div key={itemIdx}>
                                        <p className="text-sm text-gray-600 hover:text-black py-1 font-medium">
                                          <Link>{item.name}</Link>
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-2xl">
              <div
                onClick={openSearch}
                className="flex items-center bg-gray-100 hover:bg-gray-200 w-30 rounded-full"
              >
                <div className="bg-gray-100 hover:bg-gray-300 rounded-full p-1 cursor-pointer">
                  <CiSearch />
                </div>
                <p className="text-sm font-medium px-3">Search</p>
              </div>

              {isSearch && (
                <>
                  <div className="absolute top-0 right-0 left-0 bottom-0 h-screen bg-black/20"></div>
                  <div className="absolute top-0 right-0 left-0 bg-white overflow-y-auto">
                    <div className="flex justify-between px-5 py-2">
                      <img src={logo} className="object-cover h-15" alt="" />
                      <div className="flex w-[60%] flex-col items-center justify-center pt-2">
                        <div className="flex w-full items-center bg-black/3 hover:bg-black/5 rounded-full">
                          <div className="p-2 bg-black/3 hover:bg-black/10 cursor-pointer rounded-full">
                            <CiSearch />
                          </div>
                          <input
                            type="text"
                            value={isSearching}
                            onChange={handleSearching}
                            onKeyDown={handleKeyPress}
                            className="outline-none border-none text-lg w-full font-medium"
                            placeholder="Search"
                          />
                        </div>
                        <div className="w-full py-10">
                          {(isSearching.length === 0 ||
                            productSearch.length === 0) && (
                            <div className="w-full">
                              <div className="">
                                <h2 className="text-sm font-medium text-black/60">
                                  Popular Search Terms
                                </h2>
                                <div className="flex gap-x-5 gap-y-2 flex-wrap py-5">
                                  {DataPopular.map((e, i) => (
                                    <div
                                      className="bg-black/5 hover:bg-black/10 px-5 py-1 text-lg font-medium rounded-full"
                                      key={i}
                                    >
                                      <Link
                                        to={`/sale?q=${encodeURIComponent(
                                          e.name
                                        )}`}
                                        onClick={closeSearch}
                                      >
                                        {e.name}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="">
                                <h2 className="text-sm font-medium text-black/60">
                                  Recent Searches
                                </h2>
                                <div className="py-5">
                                  {recentSearches.slice(0, 10).map((e, i) => (
                                    <div
                                      className="text-black hover:text-black/80 px-5 py-1 text-lg font-medium rounded-full flex items-center justify-between"
                                      key={i}
                                    >
                                      <Link
                                        to={`/sale?q=${encodeURIComponent(e)}`}
                                        onClick={closeSearch}
                                      >
                                        {e}
                                      </Link>
                                      <button
                                        onClick={() => removeRecentSearch(i)}
                                        className="hover:bg-black/30 rounded-full cursor-pointer"
                                      >
                                        <X />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <span
                        onClick={closeSearch}
                        className="text-lg font-medium cursor-pointer py-1"
                      >
                        Concel
                      </span>
                    </div>

                    {isSearching.length > 0 && productSearch.length > 0 && (
                      <div className="grid grid-cols-5 pb-10">
                        <div className="col-span-1 px-10 flex flex-col gap-2 rounded">
                          <h2 className="font-medium text-black/70 text-sm">
                            Top Categories
                          </h2>
                          {topCategories.map((e, i) => (
                            <div key={i}>
                              <h2 className="text-lg font-normal text-black/70">
                                {highlightMatch(e, isSearching)}
                              </h2>
                            </div>
                          ))}
                        </div>
                        <div className="col-span-4">
                          <div className="grid grid-cols-5 gap-3 overflow-hidden">
                            {productSearch
                              .flatMap((main) =>
                                main.product.map((e) => ({
                                  img: e.img,
                                  title: main.title,
                                  price: e.price,
                                  category: main.category,
                                }))
                              )
                              .slice(0, 5)
                              .map((e, i) => (
                                <div key={i}>
                                  <div>
                                    <img
                                      src={e.img}
                                      className="w-full h-full object-cover rounded-sm"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2 py-5">
                                    <h2 className="text-[18px] font-medium">
                                      {e.title}
                                    </h2>
                                    <div className="text-[18px] text-black/70 font-medium flex flex-wrap">
                                      {e.category.map((cat, idx) => (
                                        <h2 key={idx}>{cat}</h2>
                                      ))}
                                    </div>
                                    <h2 className="text-[18px] font-medium">
                                      ${e.price}
                                    </h2>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              <CiHeart />
              <CiBag1 />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
