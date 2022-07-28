import { setSession, getSession } from "../../storage/session"

const SET_LOGIN = 'login/SET_LOGIN'
const SET_USER = 'login/SET_USER'

const initialState = {user: null,
                      token: null,
                      message: null
}

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})

export const postUserToApi = (name) => async (dispatch) => {
    fetch('http://rails-hotels-api.herokuapp.com/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: {'name': name}})
      })
      .then((response) => response.json())
      .then((data) => dispatch(setUser({message: data.message})))
      .catch((error) => dispatch(setUser({message: error.message})))
}

export const setLogin = (payload) => ({
    type: SET_LOGIN,
    payload
})

export const getSessionFromLocalStorage = () => (dispatch) => {
  const session = getSession()
  if(session){
    dispatch(setLogin({token: session.token, user: session.user}))
  }
}

export const getUserFromApi = (name) => async (dispatch) => {
  fetch(`http://rails-hotels-api.herokuapp.com/v1/login/${name}`)
  .then((response) => response.json())
  .then((data) => {
    setSession({token: data.token, user: name})
    dispatch(setLogin({token: data.token, user: name}))
  })
  .catch((error) => dispatch(setLogin({message: error.message})))
}

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case SET_LOGIN: {
            return {...action.payload}
        }
        case SET_USER: {
            return {...action.payload}
        }
        default: 
        return state
    }
}
export default reducer