import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHotelsFromApi } from "../../redux/hotels/hotels";
import { getSession } from "../../storage/session";
import { useSelector, useDispatch } from "react-redux";
import Sign from "../extras/sign/sign";

function Details(){

    useEffect(() => {
        dispatch(getHotelsFromApi(5, 0))
        if(session.token === null){
         navigate("/login")   
        }
    },[])

    const params = useParams()
    const dispatch = useDispatch()
    const state = useSelector((store) => store.hotels)
    const session = getSession()
    const navigate = useNavigate()
    if(state.data){
        const data = state.data[params.hotelId]
        const {address, description, feature, id, image_path, name} = data
        
        return(
            <section>
          {/* <div className="image-details">
            <img src={image_path}/>
          </div> */}
          <div className="options-details">
            <div className="header-details">
                <h2>{name}</h2>
                <p>{`${address.city}, ${address.country}. zone: ${address.neighbourhood}`}</p>
            </div>
            <div>
               <Sign bool={false}/>
            </div>
          </div>
        </section>
    )
  }
  return(
    <p>loading</p>
  )
}

export default Details;