import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./pages/createProduct";
import LoginPage from "./pages/login";
import ProductList from "./pages/productList";
import { createContext, useState } from "react";
import Header from "./component/header";

// context for global state management
//  Context: create context
interface ThemeContextInterface {
  theme: string,
  setTheme: Function
}
export const ThemeContext = createContext({} as ThemeContextInterface);

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <>
      {/* Context : passing provider to main component for global props acccess */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* routing */}
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add-product" element={<CreateProduct />} />
            <Route path="/products" element={<ProductList />} />

            <Route path="*" element={<div>No routes found</div>} />
          </Routes>
        </Router>

      </ThemeContext.Provider>
    </>
  );
}

export default App;
