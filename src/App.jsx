import './App.css';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [landingPageVisited, setLandingPageVisited] = useState(false);
  const handleStartClick = () => {
    setLandingPageVisited(true);
  };

  // Should be replaced with routing but that is not part of the course!
  const [productsPageRequired, setProductsPageRequired] = useState(true);
  const handleProductsPageRequired = () => {
    setProductsPageRequired(true);
  };
  const handleCartPageRequired = () => {
    setProductsPageRequired(false);
  };

  return (
    <>
      { landingPageVisited ? (
        productsPageRequired ? (
          <ProductList
            onProductsPageRequired={handleProductsPageRequired}
            onCartPageRequired={handleCartPageRequired}/>
        ) : (
          <ShoppingCart
            onProductsPageRequired={handleProductsPageRequired}
            onCartPageRequired={handleCartPageRequired}/>
        )
      ) : (
        <LandingPage onStartClick={handleStartClick}/>
      )}
    </>
  )
}

export default App
