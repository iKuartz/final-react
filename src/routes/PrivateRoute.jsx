import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const logged = true

  return logged ? children : <Navigate to="/login" />

};

export default PrivateRoute;
