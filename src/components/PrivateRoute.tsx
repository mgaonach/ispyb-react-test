import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import AuthErrorBoundary from 'components/AuthErrorBoundary';

export interface LocationState {
  from: string;
  message?: string;
}

const PrivateRoute = () => {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <AuthErrorBoundary>
      <Outlet />
    </AuthErrorBoundary>
  );
};

export default PrivateRoute;
