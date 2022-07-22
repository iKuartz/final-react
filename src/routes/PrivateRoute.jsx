import { useNavigate } from 'react-router-dom';
import { getSession } from '../storage/session';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const loged = getSession('session')
  const navigate = useNavigate()
  const session = loged === 'loged';
  
  useEffect(() => {
    if (!session){
     navigate("/login")   
    }
},[])
  return children;
};

export default PrivateRoute;
