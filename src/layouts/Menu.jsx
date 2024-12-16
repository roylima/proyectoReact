import React from 'react';
import { Link } from 'react-router-dom'; 
import "./estiloNav.css";

export default function Menu() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link> 
        </li>
        <li>
          <Link to="/clasificacion">Clasificación</Link>
        </li>
        <li>
          <Link to="/historia">Historia</Link>
        </li>
        <li>
          <Link to="/lenguajes">Lenguajes</Link>
        </li>
        <li>
          <Link to="/python">Python</Link>
        </li>
        <li>
          <Link to="/java">Java</Link>
        </li>
      </ul>

    </nav>
  );
}