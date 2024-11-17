// import React from 'react'

import { Outlet, useLocation } from "react-router-dom";
import { Footer, NavBar } from "../components/shared";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);
  return (
    <div className="w-full min-h-dvh flex flex-col">
      <NavBar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />

      <section className="flex flex-1">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default RootLayout;
