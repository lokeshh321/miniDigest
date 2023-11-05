import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import App from './App';
import Explore from './components/explore/Explore';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import ForgetPassword from './components/login/ForgetPassword';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Signup from './components/signup/Signup';
import Trending from './components/trending/Trending';
import ErrorPage from './errorPage';
import theme from './theme';
import ProtectedRoute from './utils/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Landing />,
        index: true,
      },
      {
        path: 'signup/',
        element: <Signup />,
      },
      {
        path: 'login/',
        element: <Login />,
      },
      {
        path: 'reset/',
        element: <ForgetPassword />,
      },
      {
        path: 'user/',
        element: (
          <ProtectedRoute>
            <Nav />
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'home/',
            element: <Home />,
          },

          {
            path: 'trending/',
            element: <Trending />,
          },
          {
            path: 'explore/',
            element: <Explore />,
          },
          {
            path: 'profile/',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
