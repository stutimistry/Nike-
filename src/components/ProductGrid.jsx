import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid({ onAddToCart, onAddToWishlist, wishlistItems }) {
  const products = [
    {
      id: 1,
      name: 'Air Max 90',
      category: 'Running',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Revolution 7',
      category: 'Running',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1556821552-5f394c4f04af?w=500&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'Air Force 1',
      category: 'Casual',
      price: 109.99,
      image: 'https://images.unsplash.com/photo-1549298881-3d2e6fbfc2ef?w=500&h=500&fit=crop'
    },
    {
      id: 4,
      name: 'Jordan 1 Retro',
      category: 'Basketball',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1543163521-9efcc062db94?w=500&h=500&fit=crop'
    },
    {
      id: 5,
      name: 'Cortez Classic',
      category: 'Casual',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop'
    },
    {
      id: 6,
      name: 'Blazer Mid',
      category: 'Basketball',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1549297355-12b396c7fcf9?w=500&h=500&fit=crop'
    },
    {
      id: 7,
      name: 'Dunk Low',
      category: 'Basketball',
      price: 109.99,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop'
    },
    {
      id: 8,
      name: 'ZoomX Vaporfly',
      category: 'Running',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
    },
    {
      id: 9,
      name: 'Odyssey React',
      category: 'Running',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1542820325-4081929dd979?w=500&h=500&fit=crop'
    },
    {
      id: 10,
      name: 'LeBron 18',
      category: 'Basketball',
      price: 209.99,
      image: 'https://images.unsplash.com/photo-1503514453594-fd0b9b78e9f1?w=500&h=500&fit=crop'
    },
    {
      id: 11,
      name: 'Metcon 7',
      category: 'Training',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1511456855141-e4f82469421c?w=500&h=500&fit=crop'
    },
    {
      id: 12,
      name: 'Air Zoom Alphafly',
      category: 'Running',
      price: 279.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
    }
  ];

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="section-title">New Arrivals</h2>
        <p className="section-subtitle">Explore Our Latest Collection</p>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              isInWishlist={wishlistItems.some(item => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;