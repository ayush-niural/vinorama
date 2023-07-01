import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

import { useContext } from "react";

import Cart from "./Cart";
import { CartContext } from "../contexts/cart.context";
import { ModalContext } from "../contexts/modal.context";
import Dialog from "../components/Dialog";
import Login from "./Login";
import { UserContext } from "../contexts/user.context";

export default function Navigation() {
  const { toogleCart } = useContext(CartContext);
  const { handleOpenDialog } = useContext(ModalContext);
  const { currentUser, removeCurrentUser } = useContext(UserContext);
  const [navigationState, setNavigationState] = useState(false);
  const { cartItemsCount } = useContext(CartContext);
  return (
    <>
      <div
        className={`px-8 flex justify-between py-4 items-center border-b-2 border-b-solid mb-6 ${
          navigationState ? "tablet:flex-col mobile:flex-col" : "flex-row"
        } `}
      >
        <div className="flex items-center gap-6 w-full">
          <Bars4Icon
            className="w-6 h-6 text-slate-900 hover:text-red-500 active:text-red-700 flex laptop:hidden desktop:hidden"
            onClick={(e) => {
              e.preventDefault();
              // console.log("Button Clicked");
              setNavigationState(!navigationState);
              // console.log(navigationState);
            }}
          />
          <div className="w-[50%] mobile:w-full tablet:w-full flex gap-6 items-center">
            <Link to="/">
              <h1 className="font-black text-xl text-3xl py-3 text-red-700">
                vinorama
              </h1>
            </Link>
            <div className="flex justify-end w-full ">
              <div className="relative mobile:hidden tablet:hidden">
                <input
                  type="text"
                  placeholder="Search ...."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 hover:text-gray-900" />
                </button>
              </div>
              <div className="border-gray-300 border-l-2 pl-4 flex gap-2 justify-end laptop:hidden desktop:hidden">
                <div className="flex gap-4 items-center ">
                  {currentUser ? (
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-2">
                        <UserCircleIcon className="h-6 w-6 text-slate-900" />
                      </div>
                      <button
                        className="btn-primary mx-2"
                        onClick={() => removeCurrentUser()}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn-primary px-2"
                      onClick={() => {
                        handleOpenDialog();
                      }}
                    >
                      Login
                    </button>
                  )}
                </div>

                <button
                  onClick={toogleCart}
                  className="relative p-2 flex gap-2"
                >
                  <ShoppingCartIcon className="h-6 w-6 text-slate-900" />
                  <span className="absolute top-[-8px] right-[-8px] px-2 py-1 rounded-full bg-red-700 text-white font-medium text-sm">
                    {cartItemsCount}
                  </span>
                </button>
                <Cart />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative flex justify-end w-full gap-2 ${
            navigationState
              ? " tablet:flex tablet:flex-col tablet:bg-white mobile:bg-white  mobile:flex mobile:flex-col "
              : "mobile:hidden tablet:hidden laptop:flex laptop:items-center desktop:flex desktop:items-center"
          } `}
        >
          <Link className="p-2" to="/shop">
            Wine
          </Link>
          <Link className="p-2" to="/offers">
            Offers
          </Link>
          <div className="border-gray-300 border-l-2 pl-4 flex gap-2 mobile:hidden tablet:hidden">
            <div className="flex gap-4 items-center">
              {currentUser ? (
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2">
                    <UserCircleIcon className="h-6 w-6 text-slate-900" />
                  </div>
                  {/* <button
                  className="btn-primary mx-2"
                  onClick={() => removeCurrentUser()}
                >
                  Logout
                </button> */}
                </div>
              ) : (
                <button
                  className="btn-primary px-2"
                  onClick={() => {
                    handleOpenDialog();
                  }}
                >
                  Login
                </button>
              )}
            </div>

            <button onClick={toogleCart} className="relative p-2 flex gap-2">
              <ShoppingCartIcon className="h-6 w-6 text-slate-900" />
              <span className="absolute top-[-8px] right-[-8px] px-2 py-1 rounded-full bg-red-700 text-white font-medium text-sm">
                {cartItemsCount}
              </span>
            </button>
            <Cart />
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* Following code opens dialog for user sign-in */}
      <Dialog>
        <Login></Login>
      </Dialog>
    </>
  );
}
