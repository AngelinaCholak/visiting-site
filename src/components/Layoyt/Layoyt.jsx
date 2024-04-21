import React from 'react'
import { NavLink } from 'react-router-dom';

const Layoyt = () => {
  return (
    <nav>
      <ul >
        <li >
          <NavLink
        
            to="/"
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            
            to="/shop"
          >
            Магазин
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Layoyt