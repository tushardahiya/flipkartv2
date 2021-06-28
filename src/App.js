import React, { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar.js/Navbar";
import Products from "./Components/Products/Products";
import Data from "./data/products.json";

//gives me array of objects with each object being a product
const stringData = JSON.stringify(Data);
const parsedData = JSON.parse(stringData);

function App() {
  const [products] = useState(parsedData);

  return (
    <div className="App">
      <Navbar />
      <main>
        {products.length === 0 ? (
          <h1>NO PRODUCT FOUND</h1>
        ) : (
          <Products products={products} />
        )}
      </main>
    </div>
  );
}

export default App;
