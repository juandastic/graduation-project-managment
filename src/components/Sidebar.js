import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="border p-3 m-2 min-h-full w-full md:w-64">
      <ul className="flex flex-row md:flex-col">
        <li className="mr-3">
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