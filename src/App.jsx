import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlistItems.find(item => item.id === product.id);
    if (isInWishlist) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="App">
      <Navbar
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setShowCart(!showCart)}
        onWishlistClick={() => setShowWishlist(!showWishlist)}
      />

      {showCart && (
        <div className="cart-panel">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button onClick={() => setShowCart(false)}>✕</button>
          </div>
          {cartItems.length === 0 ? (
            <p className="empty-message">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="quantity-control">
                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                        <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} />
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      )}

      {showWishlist && (
        <div className="wishlist-panel">
          <div className="wishlist-header">
            <h2>My Wishlist</h2>
            <button onClick={() => setShowWishlist(false)}>✕</button>
          </div>
          {wishlistItems.length === 0 ? (
            <p className="empty-message">Your wishlist is empty</p>
          ) : (
            <div className="wishlist-items">
              {wishlistItems.map(item => (
                <div key={item.id} className="wishlist-item">
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <ProductGrid
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        wishlistItems={wishlistItems}
      />
      <Footer />
    </div>
  );
}

export default App;