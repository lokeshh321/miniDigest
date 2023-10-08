import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <div id="main-ui">
        <Outlet />
      </div>
    </>
  );
}

export default App;
