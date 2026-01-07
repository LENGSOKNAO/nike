import React from "react";
import B2 from "../../assets/menpicsey/kidpic/bannerKid2/banner2.jpg";
import B3 from "../../assets/menpicsey/kidpic/bannerKid2/banner3.jpg";
import B4 from "../../assets/menpicsey/kidpic/bannerKid2/banner4.jpg";
import B5 from "../../assets/menpicsey/kidpic/bannerKid2/banner5.jpg";

const imgesList = [
  { imge: B2, name: "new arrivals" },
  { imge: B3, name: "Explore Teens" },
  { imge: B4, name: "Nike Shox TL" },
  { imge: B5, name: "Fleece Shop" },
];
const BannerKid3 = () => {
  return (
    <>
      <div className="mt-5">
        <h2 className="m-5 px-0.5 text-xl font-medium sm:px-5 sm:text-3xl">
          The Latest
        </h2>
        <div className="m-0 p-0 w-full h-full sm:grid sm:grid-cols-2 overflow-hidden">
          {imgesList.map((e, index) => (
            <div key={index} className="relative">
              <div>
                <img
                  src={e.imge}
                  alt={e.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-medium text-white">{e.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerKid3;
