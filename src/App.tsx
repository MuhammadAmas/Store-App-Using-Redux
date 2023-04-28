import React from 'react'
import './App.css'
import Header from './containers/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetails'


function App() {

  return <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </Router>
  </>
}

export default App
