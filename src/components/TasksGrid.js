import React from 'react';
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

function TasksGrid({tasks}) {
  return (
    <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 grid-rows-3 gap-4">
      {tasks && tasks.map((taks, i) => (
      <div className="rounded overflow-hidden shadow-lg" key={i}>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              { taks.name }
              {/* <Link to={`/editar-proyecto/${i}`}>
                <FontAwesomeIcon icon={faEdit} />
              </Link> */}
            </div>
            <p className="text-gray-700 text-base">
            { taks.description }
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Fecha límite { taks.finish_date }
          </span>
        </div>
      </div>
      ))}
    </div>
  )
}

export default TasksGrid