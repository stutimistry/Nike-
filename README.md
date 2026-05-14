# Nike E-Commerce Website

A modern e-commerce website built with React featuring Nike products with a shopping cart and wishlist functionality.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Grid**: 12 Nike products displayed in a 3-column grid
- **Shopping Cart**: Add/remove items, adjust quantities, and view totals
- **Wishlist**: Mark favorite products with heart icon
- **Navigation Bar**: Sticky navbar with cart and wishlist badges
- **Footer**: Complete footer with links and information
- **Product Cards**: Beautiful cards with hover effects and quick preview

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── ProductCard.jsx
│   ├── ProductCard.css
│   ├── ProductGrid.jsx
│   ├── ProductGrid.css
│   ├── Footer.jsx
│   └── Footer.css
├── App.jsx
├── App.css
├── index.jsx
└── index.css
public/
└── index.html
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/stutimistry/Nike-.git
cd Nike-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🎨 Features

### Navbar
- Nike logo and branding
- Navigation links (Home, Products, New Arrivals)
- Shopping cart icon with item count badge
- Wishlist icon with count badge
- Mobile responsive hamburger menu

### Product Grid
- 12 Nike products with beautiful images
- 3 cards per row on desktop, 2 on tablet, 1 on mobile
- Product information: name, category, price
- Heart icon to add/remove from wishlist
- Add to Cart button

### Shopping Cart
- Slide-in cart panel
- Quantity controls (+/-)
- Remove item option
- Total price calculation
- Checkout button

### Wishlist
- Slide-in wishlist panel
- View all wishlist items
- Add to cart from wishlist
- Remove from wishlist

### Footer
- About Nike section
- Customer Service links
- Policies section
- Social Media links

## 💻 Technologies Used

- React 18
- CSS3 with Flexbox and Grid
- React Hooks (useState)
- Responsive Design

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🤝 Contributing

Feel free to fork this project and make improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy your Nike e-commerce shopping experience! 🛍️**
