import React from "react";

const listData = [
  {
    title: "Shoes",
    link: "/",
  },
  {
    title: "Clothing",
  },
  {
    title: "Bras & Leggings",
    link: "/",
  },
  {
    title: "Found Your Short Bra",
    link: "/",
  },
];

const ListWomen = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-between px-[2%] py-10">
        <h2 className="text-2xl font-normal pb-5 lg:pb-0">Women</h2>
        <div className="flex gap-5">
          {listData.map((e, i) => (
            <div className="" key={i}>
              <h2 className="text-md font-medium"> {e.title} </h2>
            </div>
          ))}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ListWomen;
