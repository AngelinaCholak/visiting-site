import Header from 'components/Header/Header';
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Layoyt = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Головна</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/shop">Магазин</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/shop1">Магазин1</NavLink>
    //     </li>
    //   </ul>
    //   <Outlet />
    // </nav>
  );
}

export default Layoyt