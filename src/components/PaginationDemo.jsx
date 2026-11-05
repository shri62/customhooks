```jsx
import usePagination from "../hooks/usePagination";

function PaginationDemo() {
  // Create 100 sample items
  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  // Use our pagination Hook
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
    setPage,
  } = usePagination(items.length, 10);

  // Get items for the current page
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Pagination Demo</h2>

      <p>Current Page: {currentPage} of {totalPages}</p>

      {currentItems.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>

      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>

      <p>
        Showing {itemsOnCurrentPage} items on this page.
      </p>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationDemo;
```