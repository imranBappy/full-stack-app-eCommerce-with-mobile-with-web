import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    console.log({ auth });
    return auth ? children : <Navigate to="/login" />
};

export default PrivateRoute;