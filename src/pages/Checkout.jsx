import React, { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  const calculateVat = () => {
    const vatRate = 0.13; // Assuming VAT rate is 20%
    return cartTotal * vatRate;
  };
  const calculateDeliveryCharge = () => {
    const deliveryAmount = 50;
    return deliveryAmount;
  };
  return (
    <div>
      <h1 className="text-lg font-bold p-4">Checkout Page</h1>
      {cartItems.length !== 0 ? (
        <div className="w-full py-12 bg-slate-0">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y-8 divide-white">
              {cartItems.map((items) => (
                <tr className="bg-slate-50 shadow-sm rounded-lg">
                  <td className="p-4 text-left">{items.name}</td>
                  <td className="p-4 text-center">{items.quantity}</td>
                  <td className="p-4 text-right">{`Nrs. ${items.price}`}</td>
                </tr>
              ))}

              {/* Add your product rows here */}
            </tbody>
          </table>

          <div className="flex justify-end p-4 mt-4">
            <div className="w-[40%] tablet:w-full mobile:w-full">
              <div className="flex p-2 justify-between mb-2">
                <span>Subtotal:</span>
                <span className="font-medium">{`Nrs. ${cartTotal}`}</span>
              </div>
              <div className="flex p-2 justify-between mb-2">
                <span>VAT (13%):</span>
                <span className="font-medium">{`Nrs. ${calculateVat()}`}</span>
              </div>
              <div className="flex p-2 justify-between mb-2">
                <span>Delivery Charge:</span>
                <span className="font-medium">{`Nrs. ${calculateDeliveryCharge()}`}</span>
              </div>
              <div className="flex p-2 justify-between border-t pt-2">
                <span>Total:</span>
                <span className="font-medium">
                  {`Nrs. ${
                    parseFloat(cartTotal) +
                    calculateVat() +
                    calculateDeliveryCharge()
                  }`}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end p-4">
            <button className="btn-primary">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1>
            <p className="p-6 text-base bg-slate-100 rounded-lg text-slate-400">
              There are no items in your cart
            </p>
          </h1>
        </div>
      )}
    </div>
  );
}
