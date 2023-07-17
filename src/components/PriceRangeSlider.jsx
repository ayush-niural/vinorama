import React, { useState } from "react";
import { Range } from "react-range";

const PriceRangeSlider = () => {
  const [values, setValues] = useState([30, 80]);

  const handlePriceChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="flex flex-col w-full items-center space-x-4 p-4">
      <Range
        min={0}
        max={100}
        step={1}
        values={values}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full bg-gray-200 rounded-full"
            style={{ touchAction: "none" }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-4 w-4 bg-red-700 absolute rounded-full outline-none shadow"
            style={{ touchAction: "none" }}
          />
        )}
      />
      <div className="flex justify-between w-full">
        <span>{values[0]}</span>

        <span>{values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
