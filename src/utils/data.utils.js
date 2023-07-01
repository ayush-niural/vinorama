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

export const getWineList = (category) => {
  wineData.map((item) => {
    let found = false;
    for (const key in item) {
      if (item[key] === category) {
        found = true;
        break;
      }
    }

    if (found) {
      // console.log("Returned Value: " + JSON.stringify(item));
      return item;
    } else {
      return { response: "No wine list in this category" };
    }
  });

  return wineData.filter((item) => item.category === category);
};
