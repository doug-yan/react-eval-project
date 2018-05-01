import {SET_USER, SET_USER_SUCCESS} from 'constants/actionTypes'

export function getUserSuccess (user) {
  return {
    type: SET_USER_SUCCESS,
    user
  }
}

export function getUser () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_USER,
        payload: require('./user.json')
      })
    }, 600)
    dispatch(getUserSuccess(require('./user.json')))
  }
}
