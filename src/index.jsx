import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import App from './App';
import Explore from './components/explore/Explore';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Signup from './components/signup/Signup';
import Trending from './components/trending/Trending';
import ErrorPage from './errorPage';
import theme from './theme';
import ProtectedRoute from './utils/ProtectedRoute';
import { UserContextProvider } from './utils/UserContext';

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
        path: 'user/',
        element: (
          <ProtectedRoute>
            <UserContextProvider>
              <Nav />
              <Outlet />
            </UserContextProvider>
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'home/',
            element: <Home />,
          },
          {
            path: 'explore/',
            element: <Explore />,
          },
          {
            path: 'trending/',
            element: <Trending />,
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
