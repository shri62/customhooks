
import { useState } from "react";

function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Set the starting page safely
  const [currentPage, setCurrentPage] = useState(() => {
    if (totalPages === 0) {
      return 1;
    }

    return Math.min(Math.max(initialPage, 1), totalPages);
  });

  // Find where the page starts
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Find where the page ends
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Count items on the current page
  const itemsOnCurrentPage = endIndex - startIndex;

  // Go to a specific page
  const setPage = (pageNumber) => {
    if (totalPages === 0) {
      setCurrentPage(1);
      return;
    }

    const safePage = Math.min(Math.max(pageNumber, 1), totalPages);

    setCurrentPage(safePage);
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
  const canPrevPage = currentPage > 1 && totalPages > 0;

  // Return all pagination values
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
