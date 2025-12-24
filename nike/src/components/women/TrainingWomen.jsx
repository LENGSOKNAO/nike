import React from "react";
import bann from "../../assets/bannerHome/nike.jpg";
import ba2 from "../../assets/bannerHome/g.jpg";

const TrainingWomen = () => {
  const listData = [
    {
      image: bann,
      title: "Unleash Your Powser",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      Link: "",
    },
    {
      image: ba2,
      title: "Low Light, Hight Voltage",
      Link: "",
    },
  ];
  return (
    <div className=" mx-2 md:mx-10 my-20">
      <h2 className="text-3xl font-normal py-3">Training Essentials</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {listData.map((e, i) => (
          <div className="w-150 shrink-0">
            <img src={e.image} className="w-full  object-cover" alt="" />
            <h2 className="text-2xl py-5 font-normal">{e.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingWomen;
