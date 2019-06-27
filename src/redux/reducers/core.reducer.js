import {
  LOAD_SITE,
  GET_PROJECT,
  LIST_DESIGNS,
  GET_DESIGN,
  ADD_DESIGN
} from '../actions/core.actions'

export function siteTemplates(lastState = {}, action) {
  switch (action.type) {
    case LOAD_SITE:
    return {
      ...lastState,
      ...action.config
      }
    default:
      return lastState
  }
}

export function project(lastState = {}, action) {
  switch (action.type) {
    case GET_PROJECT:
    return [
      ...lastState,
      {
        
      }
    ]
    default:
      return lastState
  }
}

export function designs(lastState = [], action ) {
  switch (action.type) {
    case LIST_DESIGNS:
      return [
        ...lastState,
        {
          
        }
      ]
    case GET_DESIGN:
      return [
        ...lastState,
        {
          
        }
      ]
    case ADD_DESIGN:
      return [
        ...lastState,
        action.design
      ]
    default:
      return lastState
  }
}

// case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })