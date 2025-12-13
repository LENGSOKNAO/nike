import React, { useState } from "react";
import { navList } from "../../model/ListNav";
import { CiBag1, CiHeart, CiSearch } from "react-icons/ci";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header>
      {/* screen md */}
      <div className="lg:hidden">
        <nav className="flex items-center  justify-between px-[5%] ">
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
        </nav>
      </div>
      {/* screen full */}
      <div className="hidden sm:hidden md:hidden lg:block">
        <nav className="flex items-center  justify-between px-[5%] ">
          {/* rigth */}
          <Link to="/">
            {/* logo */}
            <img src="src/assets/logo.png" className="text-black" alt="" />
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
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
