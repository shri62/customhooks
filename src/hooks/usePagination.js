//Inputs:
//totalItems: The total number of items to be paginated.
//itemsPerPage: The number of items to display per page (default to 10).
//initialPage: The page to start on (default to 1).

//Return Values (Object):
// currentPage: The current active page number.


// totalPages: The total number of pages calculated based on totalItems and itemsPerPage.
// startIndex: The starting index of items for the current page (0-based).
// endIndex: The ending index of items for the current page (0-based).
// itemsOnCurrentPage: The actual number of items on the current page (useful for the last page).
// setPage(pageNumber): A function to jump to a specific page number.
// nextPage(): A function to go to the next page.
// prevPage(): A function to go to the previous page.
// canNextPage: Boolean indicating if there is a next page.
// canPrevPage: Boolean indicating if there is a previous page.




import { useState } from "react";

function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  // Remember the current page
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Find where the page starts
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Find where the page ends
  let endIndex = startIndex + itemsPerPage;

  if (endIndex > totalItems) {
    endIndex = totalItems;
  }

  // Count items on the current page
  const itemsOnCurrentPage = endIndex - startIndex;

  // Go to a specific page
  const setPage = (pageNumber) => {

    // Check if there are no items
    if (totalPages === 0) {
      setCurrentPage(1);
      return;
    }

    // Do not go below page 1
    if (pageNumber < 1) {
      pageNumber = 1;
    }

    // Do not go above the last page
    if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }

    setCurrentPage(pageNumber);
  };

  // Go to the next page
  const nextPage = () => {
    setPage(currentPage + 1);
  };

  // Go to the previous page
  const prevPage = () => {
    setPage(currentPage - 1);
  };

  // Check if next or previous page is available
  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  // Return all pagination values and functions
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}

export default usePagination;
