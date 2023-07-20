import useAuth from '../../hooks/useAuth';

const PublicRoute = ({
    children
}) => {
    const auth = useAuth();
    return auth ? null : children
};

export default PublicRoute;