import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function TasksGrid() {
  return (
    <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
      {[1,2,3].map((i) => (
      <div className="max-w-md rounded overflow-hidden shadow-lg" key={i}>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              Tarea 1
              <Link to={`/editar-proyecto/${i}`}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </div>
            <p className="text-gray-700 text-base">
            This is another card with title and supporting text below it. This card has some additional content to make it slightly taller overall.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Fecha límite 05 / 09 / 2020
          </span>
        </div>
      </div>
      ))}
    </div>
  )
}

export default TasksGrid