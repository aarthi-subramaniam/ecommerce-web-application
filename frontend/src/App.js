import React, { useEffect, useState } from 'react';

const API = 'http://localhost:8080/api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <header className="header">
        <h1>ShopEasy</h1>
        <span>Cart: {cart.length}</span>
      </header>

      <main className="container">
        <h2>Products</h2>

        {products.length === 0 ? (
          <p>No products available. Start the Spring Boot backend and MySQL database.</p>
        ) : (
          <div className="grid">
            {products.map(product => (
              <article className="card" key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>₹{Number(product.price).toFixed(2)}</strong>
                <p>Stock: {product.stock}</p>
                <button
                  disabled={product.stock === 0}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
