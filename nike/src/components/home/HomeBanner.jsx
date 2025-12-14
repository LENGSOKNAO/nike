import React, { useEffect, useRef, useState } from "react";
import { listBannerImage } from "../../model/ListBannerImage";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { CgPlayButton, CgPlayPause } from "react-icons/cg";

const HomeBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);
  const progressRef = useRef(0);
  const startTimeRef = useRef(0);

  const next = () => {
    setCurrentImage((n) => (n + 1) % listBannerImage.length);
    progressRef.current = 0;
    setProgress(0);
  };
  const prev = () => {
    setCurrentImage((n) => (n === 0 ? listBannerImage.length - 1 : n - 1));
    progressRef.current = 0;
    setProgress(0);
  };

  useEffect(() => {
    clearTimeout(timer.current);
    if (autoPlay) {
      const duration = 5000; // 5 seconds for smoother transition
      startTimeRef.current =
        Date.now() - (progressRef.current * duration) / 100;

      const animate = () => {
        const elapsed = Date.now() - startTimeRef.current;
        const currentProgress = Math.min((elapsed / duration) * 100, 100);

        progressRef.current = currentProgress;
        setProgress(currentProgress);

        if (currentProgress < 100) {
          timer.current = setTimeout(animate, 50); // Update every 50ms for smooth animation
        } else {
          next();
        }
      };

      // Start the animation
      timer.current = setTimeout(animate, 50);
    }
    return () => clearTimeout(timer.current);
  }, [currentImage, autoPlay]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const styleArrow =
    "bg-gray-300 rounded-4xl p-2 hover:bg-gray-100 cursor-pointer";

  const styleText = "text-xl font-bold uppercase text-white";
  return (
    <div className="">
      <div className="relative h-20">
        <img src="/src/assets/bannerHome/bannerTop.jpg" alt="" />
        <div className="flex items-center justify-between px-[2%] absolute inset-0">
          <div className={styleText}>
            finish <br /> strong
          </div>
          <div className={styleText}>
            extra 25% off <br /> select style
          </div>
          <img src="/src/assets/logo.png" className="text-white w-30" alt="" />
          <div className={`${styleText} text-end`}>
            code: <br />
            strong
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-[75vh] relative  bg-white">
        <div
          className="flex transition-transform duration-800 ease-in-out h-full  "
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {listBannerImage.map((e, i) => (
            <>
              <div
                key={i}
                className="min-w-full h-full relative flex justify-center"
              >
                {/* black grandient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent"></div>
                {/* image banner */}
                <img
                  src={e.image}
                  className="object-cover w-full h-full"
                  alt=""
                />
                {/* data of banner */}
                <div className="absolute bottom-15 text-center text-white w-[80vh]">
                  <h2 className="text-7xl font-bigText uppercase ">
                    {" "}
                    {e.title}{" "}
                  </h2>
                  <p className="text-md font-medium py-5"> {e.subTitle} </p>
                  <button className="bg-white text-black px-4 py-1.5 rounded-4xl text-sm font-medium ">
                    {e.btnName}
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* dot banner */}
        <div className="flex gap-2 justify-center">
          <div className="absolute bottom-5  flex gap-2">
            {listBannerImage.map((_, i) => (
              <button
                key={i}
                className={` w-1.5 h-1.5 rounded-4xl ${
                  i === currentImage ? "bg-white" : "bg-gray-400"
                } `}
              />
            ))}
          </div>
        </div>

        {/* arrow for control banner */}
        <div className="absolute bottom-5 right-10 flex gap-2 items-center justify-center ">
          <button
            onClick={(e) => setAutoPlay((p) => !p)}
            className="relative flex justify-center items-center w-12 h-12"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>

            {autoPlay ? (
              <CgPlayPause className="text-white h-10 w-10  " />
            ) : (
              <CgPlayButton className="text-white h-10 w-10" />
            )}
          </button>
          <button onClick={prev} className={styleArrow}>
            <ChevronLeft />
          </button>

          <button onClick={next} className={styleArrow}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
