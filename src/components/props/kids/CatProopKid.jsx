import React from "react";

const CatProopKid = ({ img, name }) => {
  return (
    <div>
      <div className="mx-2 my-10 px-2 overflow-hidden sm:mx-10 sm:px-10">
        <div className="text-xl font-bold mb-5">{name}</div>
        <div className="h-full w-full  flex gap-x-4  overflow-x-scroll xl:overflow-hidden ">
          {img.map((e) => (
            <div className="min-w-100 min-h-40 ">
              <img
                src={e}
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatProopKid;
