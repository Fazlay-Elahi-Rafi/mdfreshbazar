export const applyFilter = ({
  product,
  selectedRating,
  type,
  selectedCategory,
  selectedWeight,
  searchInput,
  selectedPrice,
  setProductList,
  setResultsFound,
}) => {
  let updatedList = product;

  // |---------> Rating Filter
  const ratingChecked = selectedRating
    .filter((item) => item.checked)
    .map((item) => item.value);

  if (ratingChecked.length) {
    updatedList = updatedList.filter((item) =>
      ratingChecked.includes(item.rating)
    );
  }

  // |---------> Type Filter
  const typeChecked = type
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());

  if (typeChecked.length) {
    updatedList = updatedList.filter((item) => typeChecked.includes(item.type));
  }

  // |---------> Category Filter
  const categoryChecked = selectedCategory
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());

  if (categoryChecked.length) {
    updatedList = updatedList.filter((item) =>
      categoryChecked.includes(item.category)
    );
  }

  // |---------> Weight Filter
  const weightChecked = selectedWeight
    .filter((item) => item.checked)
    .map((item) => item.value);

  if (weightChecked.length) {
    updatedList = updatedList.filter((item) =>
      weightChecked.includes(item.weight)
    );
  }

  // |---------> Search Filter
  if (searchInput) {
    updatedList = updatedList.filter(
      (item) =>
        item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
    );
  }

  // |---------> Price Filter
  const minPrice = selectedPrice[0];
  const maxPrice = selectedPrice[1];

  updatedList = updatedList.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  setProductList(updatedList);

  !updatedList.length ? setResultsFound(false) : setResultsFound(true);
};
