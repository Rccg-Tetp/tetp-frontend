// import React from 'react'
import { navLinks } from "../../constants/index";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full">
      <div
        id="top-nav"
        className="bg-black text-white h-[60px] text-sm flex items-center justify-between md:w-full md:px-[87px] px-4"
      >
        <div className="flex gap-2 items-center content-center">
          <img src="/assets/icons/red_ellipse.svg" alt="ellipse" />
          <p>Join live service now</p>
          <img src="/assets/icons/arrow.svg" alt="arrow" />
        </div>
        <div id="icons" className="flex gap-[18px]">
          <a href="https://www.youtube.com/@rccgtetp" target="_blank">
            <img src="/assets/icons/youtube.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/rccgtetp/" target="_blank">
            <img src="/assets/icons/facebook.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/rccgtetp/?hl=en" target="_blank">
            <img src="/assets/icons/insta.svg" alt="" />
          </a>
        </div>
      </div>

      <div
        id="bottom-nav"
        className="h-[68px] flex justify-between bg-white p-5 md:px-[81px]"
      >
        <a href="/">
          <img src="/assets/icons/logo.svg" alt="logo" height={30} width={30} />
        </a>

        <img
          src="/assets/icons/hamburger.svg"
          className="md:hidden"
          height={20}
          width={20}
          alt="hamburger"
        />

        <ul className="md:flex hidden gap-10 text-xl font-normal">
          {navLinks.map((item) => {
            const isActive = pathname === item.route;
            return (
              <li
                key={item.label}
                className={`font-lateef ${isActive && "text-orange-650"}`}
              >
                <NavLink to={item.route}>{item.label}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
