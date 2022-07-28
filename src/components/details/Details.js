import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHotelsFromApi } from "../../redux/hotels/hotels";
import { getSession } from "../../storage/session";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faCircleCheck, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import bg from '../../assets/images/bg-su.jpg'
import Sign from "../extras/sign/sign";
import './details.scss'

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
            <section className="details-section">
          <div className="image-details">
            <img src={bg}/>
          </div>
          <div className="options-details">
            <div className="header-details">
                <h2>{name}</h2>
                <p>{`${address.city}, ${address.country}. zone: ${address.neighbourhood}. ${feature.room} rooms`}</p>
            </div>
            <ul>
                <li> pool {<Sign bool={feature.pool}/>}</li>
                <li> air conditioning {<Sign bool={feature.air_conditioning}/>}</li>
                <li> bar {<Sign bool={feature.bar}/>}</li>
                <li> gym {<Sign bool={feature.gym}/>}</li>
                <li> tv {<Sign bool={feature.tv}/>}</li>
            </ul>
            <p className="description">{description}</p>
             <a className="link" href="/">Discover more hotels <span>{'>'}</span> </a>
             <button className="cta">Reserve <FontAwesomeIcon icon={faCircleChevronRight} className='fa-thin' /></button>
          </div>
        </section>
    )
  }
  return(
    <p>loading</p>
  )
}

export default Details;