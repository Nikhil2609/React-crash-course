import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./pages/createProduct";
import LoginPage from "./pages/login";
import ProductList from "./pages/productList";
import { UserType } from "./utils/constant";



const App = () => {
  return (
    <>
      {/* <CreateProduct /> */}
      {/* <LoginPage /> */}
      {/* <ProductList products={productList} /> */}


      {/* routing */}
      <br />
      <div>
          TOP NAV
      </div>

      {/* routing */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-product" element={<CreateProduct />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
