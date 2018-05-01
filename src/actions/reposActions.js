import {SET_REPOS, SET_REPOS_SUCCESS} from 'constants/actionTypes'

export function getReposSuccess (repos) {
  return {
    type: SET_REPOS_SUCCESS,
    repos
  }
}

export function getRepos () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SET_REPOS,
        payload: require('./repos.json')
      })
    }, 600)
    dispatch(getReposSuccess(require('./repos.json')))
  }
}
