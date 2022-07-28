import { getSession } from "../../storage/session"
import axios from 'axios'
const GET_HOTELS = 'hotels/GET_HOTELS'

const session = getSession()
const initialState = []

export const getHotels = (payload) => ({
     type: GET_HOTELS,
     payload
})

const config = {
    headers: {
        "Content-type":"application/json",
        'token': session.token
    }
}

export const getHotelsFromApi = (amount, index) => (dispatch) => {
    
     axios.get(`http://rails-hotels-api.herokuapp.com/v1/hotels?limit=${amount}&offset=${index}`, config)
    .then((data) => dispatch(getHotels(data.data)))
    .catch((error) => console.log(error))
}

const reducer = ( state = initialState, action ) => {

    switch(action.type){
        case GET_HOTELS:{
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default reducer;