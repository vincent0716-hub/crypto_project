import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="fixed w-full bg-[transparent] text-[#f3f2f4] z-[9999]">
      <div
        className="flex text-[20px] items-center justify-between
        m-0 max-w-[100%] p-7
        font-Grotesk
        "
      >
        <Link to="/">
          <a className="text-[2rem] cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all">
            COINDOM
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
