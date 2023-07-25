const paginate = (page) => {
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(page.length / itemsPerPage);

  const newPage = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return page.slice(start, start + itemsPerPage);
  });

  return newPage;
};

export default paginate;
