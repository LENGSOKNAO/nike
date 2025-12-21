import { Link } from "react-router";
import SmallText from "../../components/props/text/SmallText";
import { dataFooter2 } from "../../model/ListFooter2";
import { dataFooter3 } from "../../model/ListFooter3";
import { listFooter } from "../../model/ListFooter";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="my-10">
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
      <div className="flex justify-center">
        <div className="h-109 hover:h-full overflow-hidden pt-40  w-[50%]">
          <div className="grid grid-cols-4 place-items-center">
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
    </footer>
  );
};

export default Footer;
