/*
 * action types
 */

export const ADD_PROJECT = 'ADD_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

/*
 * action creators
 */

export function addProjectAction(data) {
  return { type: ADD_PROJECT, payload: data }
}

export function editProjectAction(data) {
  return { type: EDIT_PROJECT, payload: data }
}

export function deleteProjectAction(id) {
  return { type: DELETE_PROJECT, payload: { id } }
}
