import React, { useState } from "react";
import { navList } from "../../model/ListNav";
import { CiBag1, CiHeart, CiSearch } from "react-icons/ci";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white">
      {/* screen md */}
      <nav className="lg:hidden">
        <div className="flex items-center justify-between px-[5%] ">
          {/* rigth */}
          <Link to="/">
            {/* logo */}
            <img src="src/assets/logo.png" className="text-black" alt="" />
          </Link>

          {/* left */}
          <div className="flex items-center gap-2 text-2xl">
            <CiSearch />
            <CiHeart />
            <CiBag1 />
            <Menu onClick={() => setNav((e) => !e)} />
            {nav && (
              <div className="">
                <ul>
                  {navList.map((e, i) => (
                    <>
                      <li> {e.mainLink} </li>
                    </>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* screen full */}
      <nav className="hidden sm:hidden md:hidden lg:block  ">
        <div className="flex items-center justify-between px-[2%] py-2 ">
          {/* rigth */}
          <Link to="/" className="bg-transparent w-20">
            {/* logo */}
            <img
              src="data:image/jpeg;base64,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"
              className="object-cover w-full"
              alt=""
            />
          </Link>
          {/* center  */}
          <div className="">
            <ul className="flex gap-5 text-md font-semibold">
              {navList.map((e, i) => (
                <>
                  <li key={i}>
                    <Link to={e.link}> {e.mainLink} </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
          {/* left */}
          <div className="flex items-center gap-2 text-2xl">
            <CiSearch />
            <CiHeart />
            <CiBag1 />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
