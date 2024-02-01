import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css';
import App from './App';
import ErrorPage from './ErrorPage';
import Overview from './pages/Overview/Overview';
import Order from './pages/Order/Order';
import Customers from './pages/Customers/Customers';
import Products from './pages/Products/Products';
// import reportWebVitals from './reportWebVitals';
import Promotion from './pages/Promotion/Promotion';
import Settings from './pages/Settings/Settings';
import Logout from './pages/Logout/Logout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "overview",
    element: <Overview />
  },
  {
    path: "customers",
    element: <Customers />
  },
  {
    path: "order",
    element: <Order />
  },
  {
    path: "products",
    element: <Products />
  },
  {
    path: "promotion",
    element: <Promotion />
  },
  {
    path: "settings",
    element: <Settings />
  },
  {
    path: "logout",
    element: <Logout />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
