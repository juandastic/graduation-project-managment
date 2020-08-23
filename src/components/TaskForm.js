import React from 'react';

function TaskForm({projectInfo = {}}) {

  function onChangeHandler(e) {
    console.log(e)
  }

  return (
    <form className="w-full max-w-6xl m-auto mt-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Nombre de la Tarea
          </label>
          <input onChange={onChangeHandler} value={projectInfo.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Fecha de Límite
          </label>
          <input onChange={onChangeHandler} value={projectInfo.finishDate} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Descripción del Proyecto
          </label>
          <textarea onChange={onChangeHandler} value={projectInfo.description} rows="6" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          </textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-full px-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Crear Tarea
          </button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm