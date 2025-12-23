import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const LinkWomen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listData = [
    {
      title: "Extra 25% Off Select Styles",
      subtitle: "Use code STRONG",
      link: "/women-sale",
    },
    {
      title: "New Women's Arrivals",
      subtitle: "Just Dropped",
      link: "/women/new",
    },
    {
      title: "Free Shipping & Returns",
      subtitle: "Nike Members Only",
      link: "/membership",
    },
    {
      title: "Up to 40% Off Women's Shoes",
      subtitle: "Limited Time",
      link: "/women/shoes",
    },
    {
      title: "Workout Essentials for Women",
      subtitle: "Train Strong",
      link: "/women/training",
    },
    {
      title: "Trending Now: Women's Styles",
      subtitle: "Shop the Look",
      link: "/women/trending",
    },
    {
      title: "Comfort Meets Style",
      subtitle: "Everyday Women's Wear",
      link: "/women/lifestyle",
    },
  ];

  // Auto-play logic without useEffect
  const frameRef = useRef(null);

  const autoPlay = () => {
    setCurrentIndex((prev) => (prev + 1) % listData.length);
    frameRef.current = setTimeout(autoPlay, 3000); // every 3 seconds
  };

  // Start auto-play only once
  const started = useRef(false);
  if (!started.current) {
    started.current = true;
    frameRef.current = setTimeout(autoPlay, 3000);
  }

  return (
    <div className="bg-gray-200 py-5 overflow-hidden">
      <div className="relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {listData.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 text-center px-4">
              <h2 className="text-lg font-semibold">
                <Link to={item.link} className="underline hover:text-gray-600">
                  {item.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkWomen;
