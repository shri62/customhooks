
import { useState, useEffect } from "react";

function useDebounce(value, delay = 500) {
  // Store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Wait before updating the value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the old timer
    return () => {
      clearTimeout(timer);
    };

  }, [value, delay]);

  // Return the updated value
  return debouncedValue;
}

export default useDebounce;
