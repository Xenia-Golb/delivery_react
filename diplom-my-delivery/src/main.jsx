import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart/Cart.jsx';
import Error from './pages/Error/Error.jsx';
import Layout from './layout/Menu/Layout.jsx';
import Product from './pages/Product/Product.jsx';
import AuthLayout from './layout/Auth/AuthLayout.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { Success } from './pages/Success/Success.jsx';

const Menu = lazy(() => import('./pages/Menu/Menu.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/',
        element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <div>Ошибка</div>
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      }, {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
