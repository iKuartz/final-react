import { Navigate } from 'react-router-dom';
import { getSession } from '../storage/session';

const PrivateRoute = ({ children }) => {
  const session = false;

  if (!session) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default PrivateRoute;
