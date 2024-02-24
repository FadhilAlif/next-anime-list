const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevPage) => prevPage + 1);
      scrollTop();
    } else {
      return;
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      scrollTop();
    } else {
      return;
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary mb-10">
      <button
        onClick={handlePrevPage}
        type="button"
        className="hover:text-color-accent border  hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-color-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-color-accent dark:text-color-accent dark:hover:text-color-primary dark:hover:bg-color-accent dark:focus:ring-color-accent"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        type="button"
        className="hover:text-color-accent border hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-color-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-color-accent dark:text-color-accent dark:hover:text-color-primary dark:hover:bg-color-accent dark:focus:ring-color-accent"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
