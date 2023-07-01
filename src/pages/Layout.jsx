import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

import React from "react";
import BottomNavigation from "./BootomNavigation";

export default function Layout() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <BottomNavigation />
    </>
  );
}
