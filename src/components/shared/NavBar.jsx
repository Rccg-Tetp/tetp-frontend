// import React from 'react'
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { navLinks } from "../../constants/index";
import { NavLink, useLocation } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ isSidebarOpen, toggleSidebar }) => {
  const { pathname } = useLocation();
  const [liveVideoId, setLiveVideoId] = useState(null);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    const fetchLiveVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&eventType=live&type=video`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setLiveVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error("Error fetching live video:", error);
      }
    };

    fetchLiveVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notify = () => {
    toast.info("Live video not available now");
  };

  return (
    <div className="w-full relative mb-[3.65rem]">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
        limit={3}
      />
      <div
        id="top-nav"
        className="bg-black text-white h-[60px] text-sm flex fixed top-0 left-0 right-0 items-center justify-between md:w-full md:px-[87px] px-4 z-50"
      >
        <div
          className="flex gap-2 items-center content-center cursor-pointer"
          onClick={() =>
            liveVideoId
              ? window.open(
                  `https://www.youtube.com/watch?v=${liveVideoId}`,
                  "_blank"
                )
              : notify()
          }
        >
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
        className="h-[68px] flex justify-between top-[3.75rem] left-0 right-0 bg-white p-5 md:px-[81px] relative"
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
          onClick={toggleSidebar}
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

        <div
          id="sideBar"
          className={`w-full h-[368px] md:hidden bg-white absolute z-20 top-0 left-0 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-end mt-[33.76px] mr-[30.76px]">
            <img
              src="/assets/icons/x-icon.svg"
              className={`${!isSidebarOpen ? "hidden" : "block"}`}
              onClick={toggleSidebar}
              alt="x-icon"
            />
          </div>

          <ul className="flex flex-col gap-[26px] text-2xl/[37.4px] font-normal mt-[40px] items-center">
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
    </div>
  );
};

NavBar.propTypes = {
  toggleSidebar: PropTypes.any.isRequired,
  isSidebarOpen: PropTypes.any.isRequired,
};

export default NavBar;
