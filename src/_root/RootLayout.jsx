// import React from 'react'

import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components/shared";

const RootLayout = () => {
  return (
    <div className="w-full md:flex md:flex-col">
      <NavBar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default RootLayout;
