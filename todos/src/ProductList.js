import React, { useState, useRef, useMemo } from "react";

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([
    "Laptop",
    "Smartphone",
    "Headphones",
    "Tablet",
    "Smartwatch",
    "Keyboard",
    "Mouse",
  ]);

  const searchInputRef = useRef(null);

  // Filtered products, memoized to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  // Focus on the search input field
  const focusSearchInput = () => {
    searchInputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>
      <input
        ref={searchInputRef} 
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />
      <button onClick={focusSearchInput} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>

      <ul style={{ marginTop: "20px" }}>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
