import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { CircleFlag } from "react-circle-flags";
import { CartContext } from "../contexts/cart.context";
import en from "i18n-iso-countries/langs/en.json";
import { getAlpha2Code, registerLocale } from "i18n-iso-countries";

// Load the country data for i18n-iso-countries
registerLocale(en);

export default function WineCardVertical({ wine }) {
  const getCountryCode = (countryName) => {
    const countryCode = getAlpha2Code(countryName, "en"); // Pass the locale as the second parameter
    return countryCode ? countryCode.toLowerCase() : null;
  };

  const StarRating = ({ rating, id }) => {
    const roundedRating = Math.round(rating);
    return (
      <div className="flex items-center">
        <div className="flex space-x-0.25">
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 ${
                index < roundedRating ? "text-yellow-400" : "text-gray-300"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  const { name, id, image, price, saleprice, region, country, grape, rating } =
    wine;
  const { addItemToCart, toogleCart } = useContext(CartContext);

  return (
    <div
      key={id}
      className="grid grid-cols-4 gap-4 mb-4 items-center text-left shadow-sm hover:shadow-lg border border-gray-300 rounded-lg overflow-clip"
    >
      <img className="col-span-1" src={image} alt={name} />
      <div className="col-span-2 flex flex-col gap-1 px-4">
        <span className="text-slate-500">{grape}</span>
        <p className="w-auto text-left">{name}</p>
        <p className="font-light flex gap-2 items-center">
          <CircleFlag
            countryCode={getCountryCode(country)}
            className="h-5"
          ></CircleFlag>
          {country}, {region}
        </p>
      </div>

      <div className="col-span-1 flex flex-col gap-1 px-4">
        <div className="text-lg pt-4 font-medium">
          {saleprice ? (
            <p>
              <span className="line-through">
                {`Rs. `}
                {price}
              </span>
              {" Rs. "}
              {saleprice}
            </p>
          ) : (
            `Rs. ${price}`
          )}
        </div>

        <div className="py-4 flex flex-col justify-between w-full items-center laptop:flex-col laptop:gap-4">
          <div className="laptop:flex flex-col w-full">
            {StarRating(rating, id)}
            {rating} rating
          </div>
          <button
            className="py-2 rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 text-slate-50 font-medium w-full flex gap-2 justify-center items-center"
            onClick={(event) => {
              event.preventDefault();
              const item = { id, name, image, price };
              addItemToCart(item);
              toogleCart();
            }}
          >
            <ShoppingCartIcon className="w-5 h-5" />
            {/* {price} */}
            Shop Item
          </button>
        </div>
      </div>
    </div>
  );
}
