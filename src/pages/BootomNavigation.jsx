import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Delivery } from "../assets/delivery.svg";
import { ReactComponent as FineReview } from "../assets/finereview.svg";

export default function BottomNavigation() {
  return (
    <div>
      <div className="w-auto bg-orange-100 py-16 px-40 mobile:px-10 tablet:px-20 desktop:px-30 laptop:px-40 space-y-10">
        <h1 className="text-center text-lg font-bold">
          Trusted by millions to discover and buy the right wine every time.
        </h1>
        <div className=" grid grid-cols-2 mobile:grid-cols-1 gap-6 text-base font-medium text-slate-700 ">
          <div className="flex items-center gap-4">
            <Delivery className="w-10 h-10" />
            <p>Fast & Secure Next day delivery</p>
          </div>
          <div className="flex items-center gap-4">
            <FineReview className="w-10 h-10" />
            <p>Check honest reviews of any wine before purchase</p>
          </div>
        </div>
      </div>
      <div className="container m-auto grid grid-cols-3 mobile:grid-cols-1 mobile:px-8 mobile:gap-8 py-16 gap-6 ">
        <div className="flex flex-col font-thin gap-4">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/news">News</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/content-policy">Content Policy</Link>
        </div>
        <div className="flex flex-col font-thin gap-4">
          <h3 className="font-bold text-lg mb-4">News and Blogs</h3>
          <Link to="/press">Press</Link>
          <Link to="/awards">Awards</Link>
          <Link to="/terms-of-sale">Terms of Sale</Link>
        </div>
        <div className="flex flex-col font-thin gap-4">
          <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
          <div className="flex">
            <img
              src={require("../assets/payment-fonepay.png")}
              alt="payment via fonepay"
            />
            <img
              src={require("../assets/payment-mastercard.png")}
              alt="payment via mastercard"
            />
            <img
              src={require("../assets/payment-american-express.png")}
              alt="payment via american express"
            />
            <img
              src={require("../assets/payment-visa.png")}
              alt="payment via visa card"
            />
          </div>
        </div>
      </div>
      <div className="px-10 m-auto flex justify-between text-sm bg-gray-100 text-gray-500 py-4">
        <p>© 2023, Vinorama Pvt. Ltd. All rights reserved.</p>
        <div>
          <Link to="/careers">Careers</Link>
          <Link to="privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
