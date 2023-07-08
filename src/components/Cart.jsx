import React, { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../contexts/cart.context";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cartItems,
    removeItemFromCart,
    isCartOpen,
    toogleCart,
    cartTotal,
    cartItemsCount,
  } = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <div
      className={`fixed  top-0 right-0 h-screen desktop:w-1/3 laptop:w-1/2 tablet:w-2/3 mobile:w-screen bg-white z-50 transition-transform transform  ${
        isCartOpen ? "-translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-4 p-10 h-fit overflow-auto">
          <div className="flex justify-between">
            <h2 className="text-lg mb-4 font-bold ">Cart Contents</h2>
            <XMarkIcon
              onClick={toogleCart}
              className="w-6 h-6 text-gray-500 cursor-pointer"
            ></XMarkIcon>
          </div>

          {/* ------------- */}
          {/* {console.log(typeof cartItems)} */}

          {cartItemsCount ? (
            <div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 rounded-md border border-gray-200 overflow-clip">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-gray-900 ">
                            <h3 className="text-base font-normal">
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="text-base font-medium">
                              {product.price}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {product.quantity}
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-600 hover:text-red-500"
                              onClick={() => removeItemFromCart(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h1>
                <p className="p-6 text-base bg-slate-100 rounded-lg text-slate-400">
                  There are no items in your cart
                </p>
              </h1>
            </div>
          )}

          {/* ------------- */}
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 p-10 text-center">
          <div className="flex flex-col gap-2 text-left">
            <div className="flex gap-6 justify-between ">
              <h2 className="font-bold text-lg">Subtotal</h2>
              <h2 className="font-bold text-lg">{cartTotal}</h2>
            </div>
            <p className="text-gray-500 font-light text-sm">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
          <button
            className="btn-primary w-full"
            onClick={(e) => {
              e.preventDefault();
              navigate("/checkout");
              toogleCart();
            }}
          >
            Checkout
          </button>
          <span>
            or{" "}
            <button onClick={toogleCart} className="text-red-500">
              Continue Shopping
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
