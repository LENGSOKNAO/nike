import { Link } from "react-router";
import SmallText from "../../components/props/text/SmallText";
import { dataFooter2 } from "../../model/ListFooter2";
import { dataFooter3 } from "../../model/ListFooter3";
import { listFooter } from "../../model/ListFooter";
import logo from "../../assets/logo.png";
import logoBlack from "../../assets/logobartop.png";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = ({ bg }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [Menu, setMenu] = useState(false);

  const openMenu = (e) => {
    setIsMenu(isMenu === e ? null : e);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <footer className={` ${bg ? "bg-black/90 text-white" : "bg-white"} pb-15 `}>
      {/* footer 1 */}
      <div className="px-5">
        <div className="flex justify-center">
          {bg ? (
            <img src={logoBlack} className="w-25 md:w-30 py-10" alt="" />
          ) : (
            <img src={logo} className="w-25 md:w-30 py-10" alt="" />
          )}
        </div>
        <div className="md:flex flex-col items-center justify-center">
          <div className="flex gap-10">
            {listFooter.map((e, i) => (
              <div className="" key={i}>
                <Link to={`/sale?q=${encodeURIComponent(e)}`}>
                  <SmallText text={e.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer 2 */}
      <>
        <div className="hidden md:block bg-red">
          <div className="flex justify-center">
            <div className="py-20 md:w-[95%] lg:w-[80%] xl:w-[60%]">
              <div className="grid grid-cols-4 justify-items-center group">
                {dataFooter2.map((e, i) => (
                  <div className="">
                    <h3 className="text-2xl font-normal pb-5" key={i}>
                      {e.menTitle}
                    </h3>
                    <div className="max-h-40 group-hover:max-h-[1200px] overflow-hidden duration-700 ease-in-out transition-all">
                      {e.list.map((item, index) => (
                        <Link
                          to={`/sale?q=${encodeURIComponent(item.title)}`}
                          key={i}
                        >
                          <h2
                            className={`text-md font-medium ${
                              bg
                                ? "text-white/70 hover:text-white"
                                : "text-black/60 hover:text-black "
                            } py-2`}
                          >
                            {item.title}
                          </h2>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div onMouseLeave={closeMenu} className="md:hidden p-5">
          {dataFooter2.map((e, i) => (
            <div className="">
              <h2
                onClick={() => openMenu(i)}
                className="text-2xl cursor-pointer py-2"
              >
                {e.menTitle}
              </h2>
              <div className="px-2">
                <div
                  className={`overflow-hidden duration-700 ease-in-out transition-all
                  ${isMenu === i ? "max-h-500" : "max-h-0"}
                  `}
                >
                  {e.list.map((e, i) => (
                    <div className="">
                      <h2
                        className={`${
                          bg
                            ? "text-white/70 hover:text-white"
                            : "text-black/60 hover:text-black "
                        }text-md py-2`}
                      >
                        {e.title}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
      {/* broder  */}
      <div className=" hidden md:block border-t border-black/10 "></div>
      {/* footer 3 */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 justify-items-center  py-10">
          {dataFooter3.map((e, i) => (
            <div className="">
              <h2 className="text-md font-medium pb-2">{e.menTitle}</h2>
              <div className="">
                {e.list.map((e, i) => (
                  <div className="py-1">
                    <span
                      className={`text-sm font-medium ${
                        bg
                          ? "text-white/70 hover:text-white"
                          : "text-black/60 hover:text-black"
                      }`}
                    >
                      <Link>{e.title}</Link>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            className={`${
              bg
                ? "text-white/70 hover:text-white"
                : "text-black/60 hover:text-black"
            } text-sm font-medium`}
          >
            <div className="flex justify-center gap-1 items-center">
              <BiWorld />
              <span
                className={`${
                  bg
                    ? "text-white/70 hover:text-white"
                    : "text-black/60 hover:text-black"
                }text-sm cursor-pointer`}
              >
                Cambodia
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-5">
        <div className="border-t border-black/10">
          {dataFooter3.map((e, i) => (
            <div
              onClick={() => setMenu(Menu === i ? null : i)}
              className="pt-5 border-b border-black/10 duration-700 ease-in-out transition-all"
            >
              <h2 className="text-lg font-medium cursor-pointer flex items-center justify-between">
                {e.menTitle}
                {Menu === i ? <ChevronDown /> : <ChevronUp />}
              </h2>

              <div
                className={`overflow-hidden duration-700 ease-in-out transition-all  pt-5 ${
                  Menu === i ? "max-h-500" : "max-h-0"
                }`}
              >
                {e.list.map((e, i) => (
                  <div
                    className={`text-sm   ${
                      bg
                        ? "text-white/70 hover:text-white"
                        : "text-black/60 hover:text-black"
                    } font-medium  py-2`}
                  >
                    <Link>
                      <span>{e.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* name of developer */}
      <h2
        className={`text-sm ${
          bg
            ? "text-white/70 hover:text-white"
            : "text-black/60 hover:text-black"
        } text-black/60 py-2 px-4 w-[70%]`}
      >
        © 2026 Soknao and Seyha. Developed by Soknao and Seyha. All rights
        reserved
      </h2>
    </footer>
  );
};

export default Footer;
