import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((error) => {
        setError('Error fetching products');
        setProducts([]);
      });
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <h1>All Product </h1>
      </nav>
      <div className="product-list">
        {error ? (
          <p>{error}</p>
        ) : (
          products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <div className='button-container'>
              <button className='btn'> Add to Cart</button>
              <button className='btn'>Buy Now</button></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
