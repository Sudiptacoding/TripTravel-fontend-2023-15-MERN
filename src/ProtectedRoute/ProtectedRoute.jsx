import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../common/Loader';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, loader } = useAuth();
    const location = useLocation();

    if (loader) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;