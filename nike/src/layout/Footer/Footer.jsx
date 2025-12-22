import { Link } from "react-router";
import SmallText from "../../components/props/text/SmallText";
import { dataFooter2 } from "../../model/ListFooter2";
import { dataFooter3 } from "../../model/ListFooter3";
import { listFooter } from "../../model/ListFooter";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Footer = () => {
  const [isMenu, setIsMenu] = useState(false);

  const openMenu = (e) => {
    setIsMenu(isMenu === e ? null : e);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <footer className="">
      {/* footer 1 */}
      <div className="flex flex-col items-center justify-center">
        <img src={logo} className="w-30" alt="" />
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
      <>
        <div className="hidden md:block">
          <div className="flex justify-center">
            <div className="pt-40  md:w-[95%] lg:w-[80%] xl:w-[60%]">
              <div className="grid grid-cols-4 justify-items-center group">
                {dataFooter2.map((e, i) => (
                  <div className="">
                    <h3 className="text-2xl font-normal pb-5" key={i}>
                      {e.menTitle}
                    </h3>
                    <div className="max-h-40 group-hover:max-h-[1200px] overflow-hidden duration-700 ease-in-out transition-all">
                      {e.list.map((item, index) => (
                        <Link to={item.links} key={i}>
                          <h2 className="text-md font-medium text-black/60 hover:text-black py-2 ">
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
        <div onMouseLeave={closeMenu} className="md:hidden py-10">
          {dataFooter2.map((e, i) => (
            <div className="">
              <h2
                onClick={() => openMenu(i)}
                className="text-2xl cursor-pointer py-2"
              >
                {e.menTitle}
              </h2>
              <div className="px-5">
                {isMenu === i && (
                  <div className="">
                    {e.list.map((e, i) => (
                      <div className="">
                        <h2 className="text-md py-2">{e.title}</h2>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
      <div className="border-t-1 border-black/10 mt-10">
        <h2 className="text-sm text-black/60 py-2">© 2025. Developer by soknao and seyha</h2>
      </div>
    </footer>
  );
};

export default Footer;
