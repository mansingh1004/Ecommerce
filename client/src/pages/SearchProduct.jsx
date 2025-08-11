import { useState } from "react";



const SearchProduct=()=>{


     const [searchTerm, setSearchTerm] = useState("");


   




  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.price.toString().includes(searchTerm)
  );

    return(
        <>
        <h1>search</h1>



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
              <td>${prod.price}</td>
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

        
        
        </>
    )
}



export default SearchProduct;