import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onAddToWishlist, isInWishlist }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>

        <div className="product-actions">
          <button
            className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
            onClick={() => onAddToWishlist(product)}
            title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            {isInWishlist ? '❤️' : '🤍'}
          </button>
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;