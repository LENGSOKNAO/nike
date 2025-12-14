import React from "react";
import BigText from "../props/text/BigText";
import SmallText from "../props/text/SmallText";

const SportLight = () => {
  const listData = [
    {
      image: "/src/assets/listSportLight/image.png",
      title: "Fan Gear",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image1.png",
      title: "Jordan Retro",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image2.png",
      title: "Air Force1",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image3.png",
      title: "24.7 Collection",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image4.png",
      title: "Tatum 4",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image5.png",
      title: "Vomero 5",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image7.png",
      title: "Rejuven8",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image8.png",
      title: "Pegasus Premium",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image9.png",
      title: "ACG",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image22.png",
      title: "Vomero Plus",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image44.png",
      title: "Graphic Tees",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image55.png",
      title: "Dunk",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image99.png",
      title: "Lebron XXLLL",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image66.png",
      title: "Ari Jordan 1",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/image6.png",
      title: "Shox",
      links: "",
    },
    {
      image: "/src/assets/listSportLight/33image.png",
      title: "Ari Max",
      links: "",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center ">
        <BigText text="SORTLIGHT" />
        <div className="py-5">
          <SmallText text="Classic silhouettes and cutting-edge innovation to build your game from the ground up." />
        </div>
        <div className="grid grid-cols-8 gap-x-25 gap-y-10 place-items-top mt-15 ">
          {listData.map((e, i) => (
            <div className="w-18 text-center cursor-pointer" key={i}>
              <img src={e.image} className=" object-cover " alt="" />
              <p className="text-[12px] font-bold hover:text-gray-600 py-2">
                {" "}
                {e.title}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportLight;
