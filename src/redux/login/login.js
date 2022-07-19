const SET_LOGIN = 'login/SET_LOGIN'

const initialState = false

export const setLogin = (payload) => ({
    type: SET_LOGIN,
    payload
})

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case SET_LOGIN: {
            return action.payload
        }
        default: 
        return state
    }
}
export default reducer