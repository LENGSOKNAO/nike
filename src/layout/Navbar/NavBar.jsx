import React, { useEffect, useState } from "react";
import { CiBag1, CiHeart, CiSearch } from "react-icons/ci";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { DataNavlist } from "../../model/DataNavlist";
import { DataPopular } from "../../model/popular";
import { listFooter } from "../../model/ListFooter";
import logo from "../../assets/logo.png";
import { DataProducts } from "../../data/DataProduct";

<img src={logo} className="w-20" alt="logo" />;

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isSearching, setIsSearching] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const styleSmallBar =
    "absolute top-0 right-0 bottom-0 w-85 h-screen bg-white px-5";
  const btnHover = "hover:bg-gray-200 p-2 rounded-4xl cursor-pointer";

  // searching
  const handleSearching = (e) => {
    setIsSearching(e.target.value);
  };

  const productSearch = DataProducts.filter((p) => {
    const search = isSearching.trim().toLowerCase();

    // empty search → return all
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

  // Get the search query
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isSearching.trim()) {
      const updated = recentSearches.filter(
        (item) => item.toLowerCase() !== isSearching.toLowerCase()
      );
      const newSearches = [isSearching, ...updated].slice(0, 10);
      setRecentSearches(newSearches);
      localStorage.setItem("recentSearches", JSON.stringify(newSearches));
      window.location.href = `/sale?q=${encodeURIComponent(isSearching)}`;
    }
  };

  const removeRecentSearch = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  // search open
  const openSearch = () => {
    setIsSearch(true);
    document.body.style.overflow = "hidden";
  };

  const closeSearch = () => {
    setIsSearch(false);
    document.body.style.overflow = "";
  };

  // menu samll screen
  const openSamllScreen = () => {
    setIsMenu((e) => !e);
    document.body.style.overflow = "hidden";
  };

  const closeSamllScreen = () => {
    setIsMenu((e) => !e);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your search logic here
    performSearch();
  };

  return (
    <>
      <div className={isSearch ? "hidden" : "hidden lg:block"}>
        <div className="bg-gray-200 px-[1%] py-2">
          <div className="flex justify-end   ">
            {listFooter.map((e, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${
                  i === 0
                    ? ""
                    : "before:content-[''] before:block before:w-[1px] before:h-3  before:bg-black"
                }`}
              >
                <p className="text-[14px] font-semibold px-2">{e.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-2 bg-white ">
        {/* screen md */}
        <div className="lg:hidden relative ">
          <div className="flex items-center justify-between px-[2%] py-2">
            {/* rigth */}
            <Link to="/">
              {/* logo */}
              <img src={logo} className="w-20" alt="" />
            </Link>

            {/* left */}
            <div className="flex items-center gap-2 text-2xl ">
              <div className="" onClick={openSearch}>
                <CiSearch />
              </div>
              {/* searching product */}
              {isSearch && (
                <>
                  <div className="absolute top-0 right-0 z-10 left-0 bg-white">
                    {/* search */}
                    <div className="flex items-center justify-between gap-5 px-3 py-3">
                      <div className="flex w-full flex-col items-center justify-center ">
                        <div className="flex w-full items-center bg-black/3 hover:bg-black/5  rounded-full">
                          <div className="p-2 bg-black/3 hover:bg-black/10 cursor-pointer rounded-full">
                            <CiSearch />
                          </div>
                          {/* input search */}
                          <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              value={isSearching}
                              onChange={handleSearching}
                              onKeyDown={handleKeyPress}
                              className="outline-none border-none text-lg w-full font-medium"
                              placeholder="Search"
                            />
                          </form>
                        </div>
                      </div>
                      <span
                        onClick={closeSearch}
                        className="text-sm lg:text-lg font-medium cursor-pointer "
                      >
                        Concel
                      </span>
                    </div>
                    <div className="w-full p-5 ">
                      {(isSearching.length == 0 ||
                        productSearch.length == 0) && (
                        <div className="w-full">
                          {/* popular */}
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
                                    to={`/sale?q=${encodeURIComponent(e)}`}
                                    onClick={closeSearch}
                                  >
                                    {" "}
                                    {e.name}{" "}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* recent */}
                          <div className="">
                            <h2 className="text-sm font-medium text-black/60">
                              Recent Searches
                            </h2>
                            <div className="">
                              {recentSearches.slice(0, 10).map((e, i) => (
                                <div
                                  className="text-black hover:text-black/80  py-1 text-lg font-medium rounded-full flex items-center justify-between"
                                  key={i}
                                >
                                  <Link
                                    to={`/sale?q=${encodeURIComponent(e)}`}
                                    onClick={closeSearch}
                                  >
                                    {" "}
                                    {e}{" "}
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
                            <div key={i} className="">
                              <div className="">
                                <h2 className="text-lg font-normal text-black/70">
                                  {highlightMatch(e, isSearching)}
                                </h2>
                              </div>
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
                                <div key={i} className="">
                                  <div className="">
                                    <img
                                      src={e.img}
                                      className="w-full h-full object-cover rounded-sm"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2 py-5">
                                    <h2 className="text-[18px] font-medium">
                                      {" "}
                                      {e.title}{" "}
                                    </h2>
                                    <div className="text-[18px] text-black/70 font-medium flex flex-wrap">
                                      {e.category.map((e, i) => (
                                        <h2 key={i}> {e}</h2>
                                      ))}
                                    </div>
                                    <h2 className="text-[18px] font-medium">
                                      {" "}
                                      ${e.price}{" "}
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
              {/* list samll screen */}
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
                        <>
                          <li className="flex items-center justify-between ">
                            <button
                              onClick={() =>
                                setIsListOpen(isListOpen === i ? null : i)
                              }
                              className="text-2xl font-medium py-2 cursor-pointer "
                            >
                              {e.title}
                            </button>
                            <ChevronRight />
                          </li>
                          {isListOpen === i && (
                            <div className="fixed inset-0 z-50 ">
                              <div className={styleSmallBar}>
                                {/* Header - fixed at top */}
                                <div className="flex justify-between items-center py-5">
                                  <button
                                    onClick={() => setIsListOpen(null)}
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

                                {/* THIS is the scrollable area - everything below header scrolls */}
                                <div className="h-full overflow-y-auto  pb-20">
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
                                                  ? null
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
                        </>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* screen full */}
        <div className="hidden sm:hidden md:hidden lg:block">
          <div className="flex items-center justify-between px-[2%] py-2 ">
            {/* rigth */}
            <Link to="/" className="bg-transparent w-20">
              {/* logo */}
              <img
                src="data:image/jpeg;base64,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"
                className="object-cover w-full"
                alt=""
              />
            </Link>
            {/* center  */}
            <div className="">
              <ul className="flex gap-5 text-md font-semibold">
                {DataNavlist.map((e, i) => (
                  <>
                    <li
                      key={i}
                      onMouseEnter={() =>
                        setIsHoverMenu(isHoverMenu === i ? i : i)
                      }
                    >
                      <Link to={e.link} className="z-10">
                        {" "}
                        {e.title}{" "}
                      </Link>
                      {isHoverMenu === i && (
                        <div className="bg-white absolute top-0 left-0 right-0 z-[-1] flex justify-center py-10">
                          <div
                            onMouseLeave={() => setIsHoverMenu(false)}
                            className="flex justify-center gap-[10%] w-[80%] mt-10"
                          >
                            {e.list.map((e, i) => (
                              <div key={i} className="">
                                {e.listSub.map((e, i) => (
                                  <div key={i} className="pb-10">
                                    <h2 className="text-md font-medium pb-2">
                                      <Link>{e.title}</Link>
                                    </h2>
                                    {e.listSub.map((e, i) => (
                                      <div key={i}>
                                        <p className="text-sm text-gray-600 hover:text-black py-1 font-medium">
                                          <Link>{e.name}</Link>
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
                  </>
                ))}
              </ul>
            </div>
            {/* left */}
            <div className="flex items-center gap-2 text-2xl">
              <div
                onClick={openSearch}
                className=" flex items-center bg-gray-100 hover:bg-gray-200 w-30 rounded-full "
              >
                <div className="bg-gray-100 hover:bg-gray-300 rounded-full p-1 cursor-pointer">
                  <CiSearch />
                </div>
                <p className="text-sm font-medium px-3">Search</p>
              </div>
              {/* searching product */}
              {isSearch && (
                <>
                  <div className="absolute top-0 right-0 left-0 bottom-0 h-screen bg-black/20"></div>
                  <div className="absolute top-0 right-0 left-0 bg-white overflow-y-auto">
                    {/* search */}
                    <div className="flex  justify-between px-5 py-2 ">
                      <img
                        src="data:image/jpeg;base64,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"
                        className="object-cover h-15"
                        alt=""
                      />
                      <div className="flex w-[60%] flex-col items-center justify-center pt-2">
                        <div className="flex w-full items-center bg-black/3 hover:bg-black/5  rounded-full">
                          <div className="p-2 bg-black/3 hover:bg-black/10 cursor-pointer rounded-full">
                            <CiSearch />
                          </div>
                          {/* input search */}
                          <input
                            type="text"
                            value={isSearching}
                            onChange={handleSearching}
                            onKeyDown={handleKeyPress}
                            className="outline-none border-none text-lg w-full font-medium"
                            placeholder="Search"
                          />
                        </div>
                        <div className=" w-full py-10">
                          {(isSearching.length == 0 ||
                            productSearch.length == 0) && (
                            <div className="w-full">
                              {/* popular */}
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
                                        to={`/sale?q=${encodeURIComponent(e)}`}
                                        onClick={closeSearch}
                                      >
                                        {" "}
                                        {e.name}{" "}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {/* recent */}
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
                            <div key={i} className="">
                              <div className="">
                                <h2 className="text-lg font-normal text-black/70">
                                  {highlightMatch(e, isSearching)}
                                </h2>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="col-span-4 ">
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
                                <div key={i} className="">
                                  <div className="">
                                    <img
                                      src={e.img}
                                      className="w-full h-full object-cover rounded-sm"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col gap-2 py-5">
                                    <h2 className="text-[18px] font-medium">
                                      {" "}
                                      {e.title}{" "}
                                    </h2>
                                    <div className="text-[18px] text-black/70 font-medium flex flex-wrap">
                                      {e.category.map((e, i) => (
                                        <h2 key={i}> {e}</h2>
                                      ))}
                                    </div>
                                    <h2 className="text-[18px] font-medium">
                                      {" "}
                                      ${e.price}{" "}
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
