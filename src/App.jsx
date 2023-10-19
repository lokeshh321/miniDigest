import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
// import Home from './api/test';
import { Outlet } from 'react-router-dom';

import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <div id="main-ui">
        <Outlet />
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;
