import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from './actions'

const initialDataState = {
  projects: []
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
      // const data = action.payload;

      return {
        ...state,
        projects: [
          ...state.projects
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
