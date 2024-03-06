import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from './AuthRoute';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated === false) {

        return <Navigate to='/login' />
    }

    return children;
};

export default ProtectedRoute;