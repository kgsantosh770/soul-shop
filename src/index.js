import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Character from './pages/Character/Character';
import Checkout from './pages/Checkout/Checkout';
import PaymentOptions from './pages/PaymentOptions/PaymentOptions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/characters',
        element: <Categories />
      },
      {
        path: '/characters/:id',
        element: <Character />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/payment-options',
        element: <PaymentOptions />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);