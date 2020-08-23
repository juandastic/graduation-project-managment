import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from './actions'

const initialDataState = {
  projects: [
    {
      id: 1,
      title: "Vivencias académicas de los ECAES",
      description: "Esta investigación de corte etnográfico describe las principales acciones y consecuencias académicas que, de cara a los Exámenes de Calidad de la Educación Superior en Colombia (ECAES), están sucediendo",
      finish_date: "2020-12-31",
      student_list: ["Luisa Fernanda Cano", "Alejandro Cardenas", "Jose Gabriel", "Nelson Fernando"],
      adviser: "Profesor Asesor",
      state: "En proceso",
      tasks: [
        {
          id: 1,
          name: "Tarea 1",
          description: "Descripcion de la tarea",
          finish_date: "2020-04-04"
        }
      ]
    }
  ]
};

function data(state = initialDataState, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      const data = action.payload;

      return {
        ...state,
        projects: [
          ...state.projects,
          data
        ]
      }
    }
    case EDIT_PROJECT: {
      const data = action.payload;

      const projects = state.projects.filter((project) => {
        return project.id !== data.id
      });

      return {
        ...state,
        projects: [
          ...projects,
          data
        ]
      }
    }
    case DELETE_PROJECT: {
      const id = action.payload.id;

      const projects = state.projects.filter((projectId) => {
        return projectId !== id
      });

      return {
        projects: projects
      }
    }
    default:
      return state
  }
}

const reducer = combineReducers({
  data,
  form: reduxFormReducer
});

export default reducer
