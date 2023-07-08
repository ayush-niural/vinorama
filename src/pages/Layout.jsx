import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

import React, { useContext } from "react";
import BottomNavigation from "./BootomNavigation";
import { CartContext } from "../contexts/cart.context";

export default function Layout() {
  const { isCartOpen, toogleCart } = useContext(CartContext);
  return (
    <div className="flex flex-col">
      {/* <div className="w-full bg-green-600 text-white font-medium text-center p-4">
        Your item has been added to cart
      </div> */}
      <Navigation />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <div
        className={isCartOpen ? "fixed inset-0 bg-black opacity-70" : "hidden"}
        onClick={toogleCart}
      ></div>
      <BottomNavigation />
    </div>
  );
}
