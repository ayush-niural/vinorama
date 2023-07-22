import wineData from "../shop-data";

export const getCatagories = () => {
  const mappedCategories = wineData.map(({ category, thumbnail, wines }) => {
    return {
      category,
      thumbnail,
      count: wines.length,
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
        cat === category
          ? wines.map((wine) => ({ ...wine, category: cat }))
          : []
      )
      .filter(Boolean);
  }
};

// // Filter wine by wine types
// export const filterWines = (selectedTypes, selectedGrapes) => {
//   // If no filters are applied, return an empty array
//   if (selectedTypes.length === 0 && selectedGrapes.length === 0) {
//     return [];
//   }

//   let filteredWines = wineData;

//   // Filter wines based on the selected types
//   if (selectedTypes.length > 0) {
//     filteredWines = filteredWines
//       .filter(({ category }) => selectedTypes.includes(category))
//       .flatMap(({ wines }) => wines);
//   }

//   // Filter wines based on the selected grapes
//   if (selectedGrapes.length > 0) {
//     filteredWines = filteredWines.flatMap(({ wines }) =>
//       selectedGrapes.every((selectedGrape) =>
//         wines.filter((wine) => wine.grape.includes(selectedGrape))
//       )
//     );
//   }

//   console.log(filteredWines);

//   // Add the category property to each filtered wine object
//   const winesWithCategory = filteredWines.map((wine) => ({
//     ...wine,
//     category:
//       wineData.find((data) => data.wines.includes(wine))?.category || "",
//   }));
//   // Make sure each wine object has the 'rating' property defined
//   const winesWithRating = winesWithCategory.map((wine) => ({
//     ...wine,
//     rating: wine.rating || 0, // Provide a default rating if 'rating' is undefined
//   }));

//   return winesWithRating;
// };

// Filter wine by wine types
export const filterWines = (selectedTypes, selectedGrapes) => {
  // If no filters are applied, return an empty array
  if (selectedTypes.length === 0 && selectedGrapes.length === 0) {
    return [];
  }

  const uniqueWineIds = new Set(); // To keep track of unique wine IDs
  const filteredWines = wineData.reduce((result, categoryData) => {
    // Filter wines based on the selected types
    if (
      selectedTypes.length > 0 &&
      selectedTypes.includes(categoryData.category)
    ) {
      categoryData.wines.forEach((wine) => {
        if (!uniqueWineIds.has(wine.id)) {
          result.push(wine);
          uniqueWineIds.add(wine.id);
        }
      });
    }

    // Filter wines based on the selected grapes
    if (selectedGrapes.length > 0) {
      const winesWithSelectedGrapes = categoryData.wines.filter((wine) =>
        selectedGrapes.some((selectedGrape) =>
          wine.grape.includes(selectedGrape)
        )
      );
      winesWithSelectedGrapes.forEach((wine) => {
        if (!uniqueWineIds.has(wine.id)) {
          result.push(wine);
          uniqueWineIds.add(wine.id);
        }
      });
    }

    return result;
  }, []);

  // Add the category property to each filtered wine object
  const winesWithCategory = filteredWines.map((wine) => ({
    ...wine,
    category:
      wineData.find((data) => data.wines.includes(wine))?.category || "",
  }));

  // Make sure each wine object has the 'rating' property defined
  const winesWithRating = winesWithCategory.map((wine) => ({
    ...wine,
    rating: wine.rating || 0, // Provide a default rating if 'rating' is undefined
  }));

  return winesWithRating;
};
