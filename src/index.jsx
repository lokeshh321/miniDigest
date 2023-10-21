import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Explore from './components/explore/Explore';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Signup from './components/signup/Signup';
import Trending from './components/trending/Trending';
import ErrorPage from './errorPage';
import theme from './theme';

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
        path: 'explore/',
        element: <Explore />,
      },
      {
        path: 'home/',
        element: <Home />,
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
