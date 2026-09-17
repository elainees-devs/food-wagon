# 🍔 Food Wagon

Food Wagon is a modern food ordering web application built with **React** and **TypeScript**. The project provides a responsive and user-friendly interface for browsing food items, viewing restaurant information, managing a cart, and placing food orders.

## 🚀 Features

* 🏠 Modern home page
* 🍕 Food and restaurant browsing
* 🔍 Search functionality
* 🏷️ Food categories
* 🛒 Shopping cart
* 📦 Order management
* 👤 User account interface
* 📍 Delivery address management
* 💳 Checkout and payment interface
* 📱 Responsive design
* ⚡ Fast and component-based React architecture

## 🛠️ Tech Stack

### Frontend

* **React** — UI development
* **TypeScript** — Type-safe JavaScript
* **Vite** — Development server and build tool
* **Tailwind CSS** — Styling and responsive UI
* **React Router** — Client-side routing

### Development Tools

* **ESLint** — Code quality and consistency
* **Prettier** — Code formatting
* **Git & GitHub** — Version control

## 📁 Project Structure

```text
food-wagon/
├── public/
│   └── assets/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── food/
│   │   └── cart/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Restaurants/
│   │   ├── Menu/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   └── Profile/
│   │
│   ├── hooks/
│   │
│   ├── services/
│   │
│   ├── types/
│   │
│   ├── utils/
│   │
│   ├── routes/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd food-wagon
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📜 Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Builds the application for production |
| `npm run preview` | Previews the production build         |
| `npm run lint`    | Runs ESLint                           |

## 🧩 Component Architecture

The application follows a reusable component-based architecture.

```text
Pages
  ↓
Sections
  ↓
Reusable Components
  ↓
UI Components
```

Examples of reusable components include:

* Header
* Navbar
* Search bar
* Food card
* Restaurant card
* Category card
* Cart item
* Quantity selector
* Button
* Modal
* Footer

This approach helps keep the application maintainable and makes components reusable across multiple pages.

## 🎨 Styling

The project uses **Tailwind CSS** for styling.

The design follows:

* Responsive layouts
* Consistent spacing
* Reusable UI patterns
* Mobile-first development
* Consistent typography
* Accessible interactive elements

## 🔀 Git Workflow

Feature development should be performed using separate branches.

Example:

```text
main
 │
 ├── feature/home-page
 ├── feature/restaurant-page
 ├── feature/menu
 ├── feature/cart
 └── feature/checkout
```

Recommended workflow:

```bash
git checkout -b feature/home-page
```

Implement the feature, test it, then:

```bash
git add .
git commit -m "feat: implement home page"
git push -u origin feature/home-page
```

Create a Pull Request and merge the branch into `main` after review.

## 🧪 Testing

Before merging a feature, verify:

* UI matches the intended design
* Application works on desktop and mobile
* Navigation works correctly
* Components render correctly
* No TypeScript errors
* No ESLint errors
* No browser console errors
* Production build succeeds

Run:

```bash
npm run lint
npm run build
```

## 📱 Responsive Design

Food Wagon is designed to work across different screen sizes:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

Responsive behavior is implemented using Tailwind CSS breakpoints.

## 🔮 Future Improvements

Potential future features include:

* User authentication
* Restaurant registration
* Real-time order tracking
* Online payments
* M-Pesa integration
* Restaurant dashboard
* Order notifications
* Customer reviews and ratings
* Favorites
* Discount and promotional codes
* Delivery management
* Backend API integration
* Database integration

## 📌 Project Status

**Status:** 🚧 In Development

The project is currently under active development, with features being implemented incrementally through Git feature branches.

## 👨‍💻 Development Principles

The project aims to follow:

* Clean and reusable components
* Strong TypeScript typing
* Separation of concerns
* Consistent naming conventions
* Responsive design
* Accessibility
* Maintainable folder structure
* Git-based feature development
* Small and meaningful commits

## 📄 License

This project is currently for educational and development purposes.

This version is intentionally **frontend-focused**
