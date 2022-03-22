import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const PrivateRoute = ({ children }: { children: any }) => {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
