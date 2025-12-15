import React from "react";
import { Link } from "react-router";
import SmallText from "../../components/props/text/SmallText";
import { dataFooter2 } from "../../model/ListFooter2";

const Footer = () => {
  const listFooter = [
    {
      title: "Find a Store",
      links: "",
    },
    {
      title: "Help",
      links: "",
    },
    {
      title: "Join Us",
      links: "",
    },
    {
      title: "Sign In",
      links: "",
    },
  ];

  return (
    <footer className="my-10">
      {/* footer 1 */}
      <div className="flex flex-col items-center justify-center">
        <img src="/src/assets/logo.png" className="w-30" alt="" />
        <div className="flex gap-10">
          {listFooter.map((e, i) => (
            <div className="" key={i}>
              <Link to={e.links}>
                <SmallText text={e.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* footer 2 */}
      <div className="h-50 hover:h-100 overflow-hidden py-10 duration-500 transition-[height] ease-in-out">
        <div className="flex justify-center gap-x-40  ">
          {dataFooter2.map((e, i) => (
            <div className="">
              <h3 className="text-2xl font-medium " key={i}>
                {e.menTitle}
              </h3>
              {e.list.map((item, index) => (
                <Link to={item.links} key={i}>
                  <h2 className="text-md font-medium text-gray-600 hover:text-black py-3 ">
                    {item.title}
                  </h2>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* broder */}
      <div className="border-b-2 border-gray-200 mt-30 "></div>
    </footer>
  );
};

export default Footer;
