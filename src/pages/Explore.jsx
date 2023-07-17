import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllWines } from "../utils/data.utils";
import WineCardVertical from "../components/WineCardVertical";
import PriceRangeSlider from "../components/PriceRangeSlider";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Explore() {
  const wineTypes = [
    "Red",
    "White",
    "Sparkling",
    "Rosé",
    "Dessert",
    "Fortified",
  ];
  const grapes = [
    "Cabernet Sauvignon",
    "Cabernet Franc",
    "Chardonnay",
    "Grenache",
    "Malbec",
    "Merlot",
    "Pinot Noir",
    "Riesling",
    "Sauvignon Blanc",
    "Shiraz/Syrah",
  ];
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedGrapes, setSelectedGrapes] = useState([]);
  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(
        selectedTypes.filter((selectedType) => selectedType !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  const removeTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(
        selectedTypes.filter((selectedType) => selectedType !== type)
      );
    }
  };

  const removeGrapeClick = (type) => {
    if (selectedGrapes.includes(type)) {
      setSelectedGrapes(
        selectedGrapes.filter((selectedGrape) => selectedGrape !== type)
      );
    }
  };
  const handleGrapeClick = (type) => {
    if (selectedGrapes.includes(type)) {
      setSelectedGrapes(
        selectedGrapes.filter((selectedGrape) => selectedGrape !== type)
      );
    } else {
      setSelectedGrapes([...selectedGrapes, type]);
    }
  };
  const isTypeSelected = (type) => {
    return selectedTypes.includes(type);
  };
  const isGrapeSelected = (type) => {
    return selectedGrapes.includes(type);
  };
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const category = searchParams.get("filter");
  const { category } = useParams();
  // const filteredData = data.filter((item) => item.category === category);
  // const filteredData = getWineList(category);
  const [wineList, setWineList] = useState([]);

  useEffect(() => {
    setWineList(getAllWines(category));
  }, []);

  return (
    <div className="container flex flex-col mobile:p-8">
      <div className="font-bold text-lg text-slate-900 mb-8">
        {wineList.length === 0 ? (
          <p className="p-6 text-base bg-slate-100 rounded-lg text-slate-400">
            There are no wine list in this category
          </p>
        ) : (
          <h1 className="font-bold text-lg text-slate-900 mb-8">{`Showing ${
            wineList.length
          } ${
            category !== null && category !== undefined
              ? category + " wines"
              : "Wines"
          } `}</h1>
        )}
        <div className="text-base font-medium">
          <p className="mb-4">From 1 grape and 1 regional wine style</p>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("Button Clicked");
            }}
          >
            Click to Update
          </button>
          <div className="flex flex-row flex-wrap gap-2">
            {selectedTypes.map((type) => {
              return (
                <button
                  onClick={() => removeTypeClick(type)}
                  className={`px-4 py-2 flex gap-2 items-center rounded-lg text-sm border-[1px] border-red-700 bg-red-700 text-white hover:bg-red-800 active:bg-red-900`}
                  key={type}
                >
                  {type}
                  <XMarkIcon className="w-4 h-4" />
                </button>
              );
            })}
            {selectedGrapes.map((grape) => {
              return (
                <button
                  onClick={() => removeGrapeClick(grape)}
                  className={`px-4 py-2 flex gap-2 items-center rounded-lg text-sm border-[1px] border-red-700 bg-red-700 text-white hover:bg-red-800 active:bg-red-900`}
                  key={grape}
                >
                  {grape}
                  <XMarkIcon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-base mb-6">Wine Types</h3>

            <div className="flex flex-wrap gap-2">
              {wineTypes.map((type, index) => (
                <button
                  onClick={() => handleTypeClick(type)}
                  className={`px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  ${
                    isTypeSelected(type)
                      ? "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 "
                      : "bg-white text-red-700 hover:bg-slate-100 active:bg-slate-200"
                  }`}
                  key={index}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base mb-6">Grape Types</h3>
            <div className="flex flex-wrap gap-2">
              {grapes.map((grape, index) => (
                <button
                  onClick={() => handleGrapeClick(grape)}
                  className={`px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  ${
                    isGrapeSelected(grape)
                      ? "bg-red-700 text-white hover:bg-red-800  active:bg-red-900 "
                      : "bg-white text-red-700 hover:bg-slate-100 active:bg-slate-200"
                  }`}
                  key={index}
                >
                  {grape}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base mb-6">Price Range</h3>
            <PriceRangeSlider />
          </div>
        </div>
        <div className="col-span-2 mobile:col-span-1 mobile:gap-6 tablet:col-span-2">
          {wineList.map((wine) => {
            return <WineCardVertical key={wine.id} wine={wine} />;
          })}
          {/* {displayData(filteredData, category)} */}
        </div>
      </div>
    </div>
  );
}
