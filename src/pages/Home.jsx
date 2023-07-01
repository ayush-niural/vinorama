import React from "react";
import { getCatagories } from "../utils/data.utils";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = getCatagories();
  return (
    <div className="container flex flex-col mb-6 mobile:p-8">
      <h1 className="font-bold text-lg text-slate-900 mb-6">Categories</h1>

      <div className="grid grid-cols-4 gap-4  mobile:grid-cols-1 mobile:gap-6 tablet:grid-cols-2">
        {categories.map((item) => {
          return (
            <Link
              to={`/shop/${item.category}`}
              key={item.category}
              category={item}
              className="text-center shadow-sm hover:shadow-lg border border-gray-300 rounded-lg overflow-clip "
            >
              <img
                className="bg-cover"
                src={item.thumbnail}
                alt={item.category}
              />
              <div className="p-4">
                <p className="w-auto">{item.category}</p>
                <span className="text-base text-slate-500 w-auto">
                  {item.count} wine selections
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
