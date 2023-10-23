import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Outlet } from 'react-router-dom';
// import NewsPage from './api/newsapi';

function App() {
  return (
    <div id="main-ui">
      <Outlet />
    </div>
  );
}

export default App;
