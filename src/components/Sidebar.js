import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="border max-w-xs flex-grow p-3 m-2 min-h-full">
      <ul>
        <li>
          <Link to="/">Ver Proyectos</Link>
        </li>
        <li>
          <Link to="/crear-proyecto">Crear Proyecto</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar