import Layoyt from 'components/SharedLayout/RestrictedSharedLayout/RestrictedSharedLayout';
import Home from 'pages/Home/Home';
import React from 'react'
import { Route, Routes } from 'react-router-dom';


const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layoyt />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default RestrictedRoutes