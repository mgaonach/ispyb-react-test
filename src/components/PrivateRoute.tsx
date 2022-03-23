import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { NetworkErrorBoundary, NetworkError } from 'rest-hooks';
import { useAuth } from 'hooks/useAuth';

export interface LocationState {
  from: string;
  message?: string;
}

function AuthErrorBoundary({ error }: { error: NetworkError }) {
  const location = useLocation();
  return error.status === 401 ? (
    <Navigate
      to="/login"
      state={{ from: location, message: 'Token expired' }}
    />
  ) : (
    <span>An error occured: {error.message}</span>
  );
}

const PrivateRoute = () => {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <NetworkErrorBoundary fallbackComponent={AuthErrorBoundary}>
      <Outlet />
    </NetworkErrorBoundary>
  );
};

export default PrivateRoute;
