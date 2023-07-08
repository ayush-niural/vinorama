import wineData from "../shop-data";
export const getCatagories = () => {
  const mappedCategories = wineData.map((obj) => {
    return {
      category: obj.category,
      thumbnail: obj.thumbnail,
      count: obj.wines.length,
    };
  });
  return mappedCategories;
};

export const getAllWines = (category = null) => {
  if (category === null) {
    return wineData.flatMap(({ category, wines }) =>
      wines.map((wine) => ({ ...wine, category }))
    );
  } else {
    return wineData
      .flatMap(({ category: cat, wines }) =>
        wines.map((wine) => {
          if (cat === category) {
            return { ...wine, category: cat };
          } else {
            return null;
          }
        })
      )
      .filter(Boolean);
  }
};
