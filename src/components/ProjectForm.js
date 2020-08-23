import React from 'react';
import { Field, reduxForm } from 'redux-form';
import StudentList from './StudentList';

function ProjectForm({projectInfo = {}, handleSubmit, pristine, submitting }) {

  return (
    <form className="w-full max-w-6xl m-auto mt-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Nombre del Proyecto
          </label>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Nombre de Proyecto"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Fecha de Entrega
          </label>
          <Field
            name="finish_date"
            component="input"
            type="date"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Descripción del Proyecto
          </label>
          <Field
            name="description"
            component="textarea"
            rows="10"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Field
            name="student_list"
            component={StudentList}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-full px-3">
          <button type="submit" disabled={pristine || submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Guardar
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'project', // a unique identifier for this form
})(ProjectForm);