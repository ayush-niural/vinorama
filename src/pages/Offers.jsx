import React from "react";
import { getAllWines } from "../utils/data.utils";
import WineCard from "../components/WineCard";
export default function Offers() {
  const wineList = getAllWines();
  return (
    <div className="container flex flex-col mb-6 mobile:p-8">
      <h1 className="font-bold text-lg text-slate-900 mb-8">Offer's</h1>
      <div className="grid grid-cols-4 gap-4  mobile:grid-cols-1 mobile:gap-6 tablet:grid-cols-2">
        {wineList.map((wine) =>
          wine.saleprice ? <WineCard wine={wine} /> : <></>
        )}
      </div>
    </div>
  );
}
