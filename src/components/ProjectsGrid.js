import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function ProjectsGrid({projects}) {
  return (
    <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
      {projects && projects.map((project, i) => (
      <div className="max-w-md rounded overflow-hidden shadow-lg" key={i}>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              {project.title}
              <Link to={`/editar-proyecto/${i}`}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </div>
            <p className="text-gray-700 text-base">
              Asesor: {project.adviser}
            </p>
            <p className="text-gray-700 text-base">
              Estudiantes: {project.students.join(" - ")}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {project.state}
          </span>
        </div>
      </div>
      ))}
    </div>
  )
}

export default ProjectsGrid