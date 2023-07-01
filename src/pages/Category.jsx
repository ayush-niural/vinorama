import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { registerLocale, getAlpha2Code } from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { getWineList } from "../utils/data.utils";
import { CartContext } from "../contexts/cart.context";

registerLocale(en); // Initialize the library with English locale

const getCountryCode = (countryName) => {
  const countryCode = getAlpha2Code(countryName, "en"); // Pass the locale as the second parameter
  return countryCode ? countryCode.toLowerCase() : null;
};

const StarRating = ({ rating }) => {
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

export default function Category() {
  const { addItemToCart } = useContext(CartContext);

  const displayData = (filteredData, category) => {
    return (
      <>
        <h1 className="font-bold text-lg text-slate-900 mb-8">
          {filteredData.length === 0 ? (
            <p className="p-6 text-base bg-slate-100 rounded-lg text-slate-400">
              There are no wine list in this category
            </p>
          ) : (
            `${category} Wine's`
          )}
        </h1>
        <div className="grid grid-cols-4 gap-4  mobile:grid-cols-1 mobile:gap-6 tablet:grid-cols-2">
          {filteredData.map((categoryData) => {
            return categoryData.wines.map((wineList) => {
              const { name, id, image, price, region, country, grape, rating } =
                wineList;

              return (
                <div
                  key={id}
                  className="text-left shadow-sm hover:shadow-lg border border-gray-300 rounded-lg overflow-clip"
                >
                  <img src={image} alt={name} />
                  <div className="flex flex-col gap-1 px-4">
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
                  <div className="px-4 pt-6 pb-6 flex justify-between w-full items-center laptop:flex-col laptop:gap-4">
                    <div className="laptop:flex w-full">
                      {StarRating(rating)}
                      {rating} rating
                    </div>

                    <button
                      className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 text-slate-50 font-medium w-full flex gap-2 justify-center items-center"
                      onClick={(e) => {
                        e.preventDefault();

                        const item = { id, name, image, price };
                        addItemToCart(item);
                      }}
                    >
                      <ShoppingCartIcon className="w-5 h-5" />
                      {price}
                    </button>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </>
    );
  };
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const category = searchParams.get("filter");
  const { category } = useParams();
  // const filteredData = data.filter((item) => item.category === category);
  const filteredData = getWineList(category);

  return (
    <div className="container flex flex-col mb-6 mobile:p-8">
      {displayData(filteredData, category)}
    </div>
  );
}
