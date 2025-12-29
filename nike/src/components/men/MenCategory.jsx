import React from "react";
import img1 from "../../assets/menpicsey/mencat/cat1.jpg";
import img2 from "../../assets/menpicsey/mencat/cat2.jpg";
import img3 from "../../assets/menpicsey/mencat/cat3.jpg";

const ListCat = [
  { images: img1, nameCat: "Accessories" },
  { images: img2, nameCat: "Shoes" },
  { images: img3, nameCat: "Clothing" },
];

const MenCategory = () => {
  return (
    <div className="mx-10 my-20">
      <h1 className="py-5 text-2xl">Shop By Category</h1>
      <div
        className=" flex gap-4 overflow-x-auto pb-3
    lg:grid lg:grid-cols-3 lg:overflow-x-hidden "
      >
        {ListCat.map((e, i) => (
          <div className="min-w-[300px] lg:min-w-0">
            <img src={e.images} alt="" className="w-full h-85 object-cover " />
            <p className="mt-2 text-lg ">{e.nameCat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategory;
