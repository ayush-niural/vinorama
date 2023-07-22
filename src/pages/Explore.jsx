import React, { useEffect, useState } from "react";
import { filterWines, getAllWines } from "../utils/data.utils";
import WineCardVertical from "../components/WineCardVertical";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Explore() {
  //Changes in state for this components
  const [wineList, setWineList] = useState([]);
  //Values for generating FilteredWine List
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedGrapes, setSelectedGrapes] = useState([]);
  //Values that make the sidebar categories for Types and Grapes dynamic
  const [wineTypes, setWineTypes] = useState([]);
  const [wineGrapes, setWineGrapes] = useState([]);
  //Booleans to hide or show all sidebar category elements
  const [showMoreTypes, setShowMoreTypes] = useState(false);
  const [showMoreGrapes, setShowMoreGrapes] = useState(false);

  //This function updates the Selected Wine Types Values
  const handleTypeClick = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((selectedType) => selectedType !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  //This function updates the Selected Wine Types Values
  const handleGrapeClick = (type) => {
    if (selectedGrapes.includes(type)) {
      setSelectedGrapes((prevSelectedGrapes) =>
        prevSelectedGrapes.filter((selectedGrape) => selectedGrape !== type)
      );
    } else {
      setSelectedGrapes([...selectedGrapes, type]);
    }
  };

  //This returns a boolean to identify if the types have selected CSS
  const isTypeSelected = (type) => {
    return selectedTypes.includes(type);
  };

  //This returns a boolean to identify if the types have selected CSS
  const isGrapeSelected = (grape) => {
    return selectedGrapes.includes(grape);
  };

  useEffect(() => {
    // Fetch filtered wines when the component is first rendered or when selectedTypes or selectedGrapes change
    const updateWineList = async () => {
      // Use the filterWines function to get the filtered wine list based on selectedTypes and selectedGrapes
      if (selectedTypes.length === 0 && selectedGrapes.length === 0) {
        // Fetch all wines if no types and grapes are selected
        setWineList(await getAllWines());
      } else {
        // console.log(selectedTypes, selectedGrapes);
        setWineList(await filterWines(selectedTypes, selectedGrapes));
      }
    };
    updateWineList();
  }, [selectedTypes, selectedGrapes]);

  // Create a separate useEffect for updating WineGrapes
  useEffect(() => {
    // Update the wineTypes state
    const allGrapeTypes = new Set();
    getAllWines()
      .flat()
      .forEach((item) => {
        item.grape.forEach((grape) => {
          allGrapeTypes.add(grape);
        });
      });
    setWineGrapes(Array.from(allGrapeTypes).sort());
  }, [wineList]); // Include wineList as a dependency for this useEffect

  // Create a separate useEffect for updating WineTypes
  useEffect(() => {
    // Update the wineTypes state
    const allWineTypes = new Set();
    getAllWines().forEach((item) => allWineTypes.add(item.category));
    setWineTypes(Array.from(allWineTypes).sort());
  }, [wineList]); // Include wineList as a dependency for this useEffect

  //Toggles showMoreTypes variable when button is clicked
  const handleShowMoreTypesClick = () => {
    setShowMoreTypes(!showMoreTypes);
  };
  const handleShowMoreGrapesClick = () => {
    setShowMoreGrapes(!showMoreGrapes);
  };

  return (
    <div className="container flex flex-col mobile:p-8">
      <div className="font-bold text-lg text-slate-900 mb-8">
        <div className="text-base font-medium">
          <div className="flex flex-row flex-wrap gap-2">
            {selectedTypes.map((type) => {
              return (
                <button
                  onClick={() => handleTypeClick(type)}
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
                  onClick={() => handleGrapeClick(grape)}
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
          {wineTypes.length ? (
            <div>
              <h3 className="font-bold text-base mb-6">Wine Types</h3>

              <div className="flex flex-wrap gap-2">
                {wineTypes.map((type, index) =>
                  index <= 5 ? (
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
                  ) : (
                    wineTypes.length > 5 &&
                    showMoreTypes && (
                      <button
                        onClick={() => handleTypeClick(type)} // Corrected the onClick function call
                        id="more-types"
                        className={`px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  ${
                          isTypeSelected(type)
                            ? "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 "
                            : "bg-white text-red-700 hover:bg-slate-100 active:bg-slate-200"
                        }`}
                        key={index}
                      >
                        {/* Displaying ellipsis here */}
                        {type}
                      </button>
                    )
                  )
                )}
                {showMoreTypes && (
                  <button
                    onClick={handleShowMoreTypesClick} // Corrected the onClick function call
                    className="px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  bg-slate-100 text-red-700 hover:bg-slate-100 active:bg-slate-200"
                  >
                    {showMoreTypes ? "« Show Less " : "Show more »"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          {wineGrapes.length ? (
            <div>
              <h3 className="font-bold text-base mb-6">Grape Types</h3>

              <input
                className="mb-4 file:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                type="text"
                placeholder="Search ..."
              />
              <div className="flex flex-wrap gap-2">
                {wineGrapes.map((grape, index) =>
                  index <= 5 ? (
                    <button
                      onClick={() => handleGrapeClick(grape)}
                      id="more-grapes"
                      className={`px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  ${
                        isGrapeSelected(grape)
                          ? "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 "
                          : "bg-white text-red-700 hover:bg-slate-100 active:bg-slate-200"
                      }`}
                      key={index}
                    >
                      {grape}
                    </button>
                  ) : (
                    wineGrapes.length > 5 &&
                    showMoreGrapes && (
                      <button
                        onClick={() => handleGrapeClick(grape)} // Corrected the onClick function call
                        className={`px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  ${
                          isGrapeSelected(grape)
                            ? "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 "
                            : "bg-white text-red-700 hover:bg-slate-100 active:bg-slate-200"
                        }`}
                        key={index}
                      >
                        {/* Displaying ellipsis here */}
                        {grape}
                      </button>
                    )
                  )
                )}
                {wineGrapes.length > 5 && (
                  <button
                    onClick={handleShowMoreGrapesClick} // Corrected the onClick function call
                    className="px-4 py-2 rounded-lg text-sm border-[1px] border-red-700  bg-slate-100 text-red-700 hover:bg-slate-100 active:bg-slate-200"
                  >
                    {showMoreGrapes ? "« Show Less " : "Show more »"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="col-span-2 mobile:col-span-1 mobile:gap-6 tablet:col-span-2">
          {wineList.length === 0 ? (
            <p className="p-6 text-base bg-slate-100 rounded-lg text-slate-400">
              There are no wines in this category
            </p>
          ) : (
            wineList.map((wine) => {
              return <WineCardVertical key={wine.id} wine={wine} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
