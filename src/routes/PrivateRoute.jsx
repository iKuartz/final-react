import { useNavigate } from 'react-router-dom';
import { getSession } from '../storage/session';

const PrivateRoute = ({ children }) => {
  const loged = getSession('session')
  const session = loged === 'loged';

  if (!session) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default PrivateRoute;
