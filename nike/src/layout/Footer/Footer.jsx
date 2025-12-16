import React from "react";
import { Link } from "react-router";
import SmallText from "../../components/props/text/SmallText";
import { dataFooter2 } from "../../model/ListFooter2";
import { dataFooter3 } from "../../model/ListFooter3";

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
      <div className="flex justify-center">
        <div className="h-109 hover:h-full overflow-hidden pt-40  w-[50%]">
          <div className="grid grid-cols-4 ">
            {dataFooter2.map((e, i) => (
              <div className="">
                <h3 className="text-2xl font-medium pb-5" key={i}>
                  {e.menTitle}
                </h3>
                {e.list.map((item, index) => (
                  <Link to={item.links} key={i}>
                    <h2 className="text-lg font-medium text-gray-500 hover:text-black py-3 ">
                      {item.title}
                    </h2>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* broder */}
      <div className="border-b-2 border-gray-200 pt-40 "></div>
      {/* fotter 3 */}
      <div className="">
        <div className="grid grid-cols-4 p-10">
          {dataFooter3.map((e, i) => (
            <div className="">
              <h2 className="text-md font-semibold pb-3 "> {e.menTitle} </h2>
              {e.list.map((e, i) => (
                <div className="">
                  <Link to={e.links}>
                    <h2 className="texts-sm text-gray-500 font-semibold py-1">
                      {" "}
                      {e.title}{" "}
                    </h2>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
