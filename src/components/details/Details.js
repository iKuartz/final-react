import React from "react";
import { useParams } from "react-router-dom";
import { getHotelsFromApi } from "../../redux/hotels/hotels";
import { useSelector, useDispatch } from "react-redux";

function Details(){
    const params = useParams()
    const dispatch = useDispatch()
    return(
        <>
        <h2>Details {params.hotelId}</h2>
        <button onClick={() => {
            dispatch(getHotelsFromApi(2,2))
        }}>log</button>
        </>
    )
}

export default Details;