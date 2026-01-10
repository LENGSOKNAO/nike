import React from "react";
import Img1 from "../../assets/menpicsey/jordan/feature2/jordangen1.jpg";
import Img2 from "../../assets/menpicsey/jordan/feature2/jordangen2.jpg";
import Img3 from "../../assets/menpicsey/jordan/feature2/jordangen3.jpg";
const FtList2 = [
  { img: Img1, name: "mens" },
  { img: Img2, name: "womens" },
  { img: Img3, name: "kids" },
];
const Feature2 = () => {
  return (
    <>
      <div className="mx-5 uppercase">
        <h1 className="my-10 text-2xl">shop by gender</h1>
        <div className="w-full h-full flex gap-x-3 lg:grid lg:grid-cols-3 ">
          {FtList2.map((e, index) => (
            <div className="">
              <img key={index} src={e.img} alt="" className="" />
              <h2 className="p-2 text-lg">{e.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature2;
