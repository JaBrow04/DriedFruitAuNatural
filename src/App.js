import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage'
import {HomeGrid, ContentWrapper} from "./pages/Home.style";

const App = () => {
  return (

      <HomeGrid className="page-container">
        <ContentWrapper className="content-wrap" >
    <Router forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/about-me" element={<AboutPage/>}/>
      </Routes>
    </Router>
        </ContentWrapper>
      </HomeGrid>

  );
}

export default App;
