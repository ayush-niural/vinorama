import React from "react";
import { useParams } from "react-router-dom";
import { getAllWines } from "../utils/data.utils";

import WineCard from "../components/WineCard";

export default function Category() {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const category = searchParams.get("filter");
  const { category } = useParams();
  // const filteredData = data.filter((item) => item.category === category);
  // const filteredData = getWineList(category);
  const wineList = getAllWines(category);

  return (
    <div className="container flex flex-col mobile:p-8">
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

      <div className="grid grid-cols-4 gap-4  mobile:grid-cols-1 mobile:gap-6 tablet:grid-cols-2">
        {wineList.map((wine) => {
          return <WineCard key={wine.id} wine={wine} />;
        })}
        {/* {displayData(filteredData, category)} */}
      </div>
    </div>
  );
}
