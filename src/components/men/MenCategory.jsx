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
    <div className="mx-10 my-15">
      <h1 className="py-5 text-2xl">Shop By Category</h1>
      <div
        className=" flex gap-4 overflow-x-auto pb-3
    sm:grid sm:grid-cols-3 sm:overflow-x-hidden "
      >
        {ListCat.map((e, i) => (
          <div className="min-w-87.5 sm:min-w-0">
            <img src={e.images} alt="" className="w-full h-110 object-cover " />
            <p className="mt-2 text-lg ">{e.nameCat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategory;
