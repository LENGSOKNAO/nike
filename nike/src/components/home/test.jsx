import React, { useRef, useState, useEffect } from "react";
import bann from "../../assets/bannerHome/nike.jpg";
import ba2 from "../../assets/bannerHome/g.jpg";

const ShopByColorWomen = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const listData = [
    { image: bann, title: "Unleash Your Power" },
    { image: ba2, title: "Low Light, High Voltage" },
    { image: ba2, title: "Low Light, High Voltage" },
    { image: ba2, title: "Low Light, High Voltage" },
    { image: ba2, title: "Low Light, High Voltage" },
    { image: ba2, title: "Low Light, High Voltage" },
    { image: ba2, title: "Low Light, High Voltage" },
  ];

  // Professional scroll amount: card width (~600px) + gap (16px)
  const scrollAmount = 616;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const checkArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10); // small buffer for smoothness
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    checkArrows(); // initial check
  }, []);

  return (
    <section className="mx-10 my-20">
      <h2 className="text-3xl font-normal mb-8">Training Essentials</h2>

      <div className="relative group">
        {/* Left Arrow - appears only when needed */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-6 w-14 h-14 
                       bg-white hover:bg-gray-100 rounded-full shadow-2xl 
                       flex items-center justify-center transition-all duration-300 
                       border border-gray-200 opacity-80 hover:opacity-100 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg
              className="w-8 h-8 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkArrows}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {listData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[37.25rem] group/card" // 150 * 0.25rem = 37.25rem
            >
              <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover/card:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-normal text-center mt-8">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Arrow - appears only when needed */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-6 w-14 h-14 
                       bg-white hover:bg-gray-100 rounded-full shadow-2xl 
                       flex items-center justify-center transition-all duration-300 
                       border border-gray-200 opacity-80 hover:opacity-100 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg
              className="w-8 h-8 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default ShopByColorWomen;
