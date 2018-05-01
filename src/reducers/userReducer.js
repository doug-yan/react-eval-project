import {SET_USER, SET_USER_SUCCESS} from 'constants/actionTypes'

const initialState = {}

export default function users (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case SET_USER_SUCCESS:
      return action.user
    default:
      return state
  }
}
