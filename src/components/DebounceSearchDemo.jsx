
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {
  // Store what the user types
  const [search, setSearch] = useState("");

  // Wait 500 milliseconds before updating
  const debouncedValue = useDebounce(search, 500);

  return (
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Current Input: {search}</p>

      <p>Debounced Value: {debouncedValue}</p>

      <h3>Simulated Search Results:</h3>

      {debouncedValue ? (
        <p>Searching for: {debouncedValue}</p>
      ) : (
        <p>Type to see results.</p>
      )}
    </div>
  );
}

export default DebounceSearchDemo;