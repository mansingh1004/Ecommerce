import { useState } from "react";

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Example product list (replace with your real data)
  const products = [
    { id: 1, name: "Red Shirt", price: 299 },
    { id: 2, name: "Blue Jeans", price: 799 },
    { id: 3, name: "Black Shoes", price: 1299 },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.price.toString().includes(searchTerm)
  );

  return (
    <div className="App">
      <h2>🔍 Search Products by Name or Price</h2>

      <input
        type="text"
        placeholder="Search by name or price..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <table>
        <thead>
          <tr>
            <th>📦 Name</th>
            <th>💵 Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>₹{prod.price}</td>
            </tr>
          ))}
          {filteredProducts.length === 0 && (
            <tr>
              <td colSpan={2}>No matching products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchProduct;
