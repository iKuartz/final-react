const SET_LOGIN = 'login/SET_LOGIN';
const SET_USER = 'login/SET_USER';
const LOGOUT_USER = 'logout';

const initialState = {
  user: null,
  token: null,
  message: null,
};

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

const setSession = (session) => {
  const str = JSON.stringify(session);
  localStorage.setItem('session', str);
};

const getSession = () => {
  const log = localStorage.getItem('session');
  if (log) {
    return JSON.parse(log);
  }
  return { token: null };
};

export const postUserToApi = (name) => async (dispatch) => {
  fetch('https://rails-hotels-api.herokuapp.com/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: { name } }),
  })
    .then((response) => response.json())
    .then((data) => dispatch(setUser({ message: data.message, token: null })))
    .catch((error) => dispatch(setUser({ message: error.message, token: null })));
};

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const getSessionFromLocalStorage = () => (dispatch) => {
  const session = getSession();
  if (session) {
    dispatch(setLogin({ token: session.token, user: session.user }));
  }
};

export const getUserFromApi = (name) => async (dispatch) => {
  fetch(`https://rails-hotels-api.herokuapp.com/v1/login/${name}`)
    .then((response) => response.json())
    .then((data) => {
      setSession({ token: data.token, user: name });
      dispatch(setLogin({ token: data.token, user: name }));
    })
    .catch((error) => dispatch(setLogin({ message: error.message })));
};

export const logout = () => ({
  type: LOGOUT_USER,
});

const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return { ...action.payload };
    }
    case SET_USER: {
      return { ...action.payload };
    }
    case LOGOUT_USER: {
      localStorage.removeItem('session');
      return { ...initialState };
    }
    default:
      return state;
  }
};
export default login;
