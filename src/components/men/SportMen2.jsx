import React from "react";
import SpMen1 from "../../assets/menpicsey/sportpic2/spMen1.jpg";
import SpMen2 from "../../assets/menpicsey/sportpic2/spMen2.jpg";
import BannerTowProp from "../props/banner/BannerTowProp";

const SportMen2 = () => {
  const ListSport2 = [
    {
      imges: SpMen1,
      subtitle: "Stride Collection",
      title: "embrace the Element",
      btnname: "shop",
      link: "",
    },
    {
      imges: SpMen2,
      subtitle: "Stride Collection",
      title: "embrace the Element",
      btnname: "shop",
      link: "",
    },
  ];
  return (
    <div>
      <h1 className="p-5 mt-20 font-medium text-2xl sm:px-10">
        Trending Now
      </h1>
      <div className="grid sm:grid-cols-2">
        {ListSport2.map((e, i) => (
          <BannerTowProp
            img={e.imges}
            sub={e.subtitle}
            ti={e.title}
            nameBtn={e.btnname}
          />
        ))}
      </div>
    </div>
  );
};

export default SportMen2;
