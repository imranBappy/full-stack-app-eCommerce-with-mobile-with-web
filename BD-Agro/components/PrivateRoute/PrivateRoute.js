import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import useAuthCheck from '../../hooks/useAuthCheck';
import useAuth from '../../hooks/useAuth';



const PrivateRoute = ({ children }) => {
    const navigate = useRouter()
    const isLoading = useAuthCheck();
    const auth = useAuth();

    if (isLoading) {
        return <View><Text>Loading...</Text></View>
    }
    if (!auth) {
        navigate.push('/SignIn');
        return <></>
    }
    return children;
};

export default PrivateRoute;