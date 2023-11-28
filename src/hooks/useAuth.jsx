import { useContext } from 'react';
import { UserProvider } from '../context/AuthContext';

const useAuth = () => {
    const auth = useContext(UserProvider)
    return auth;

};

export default useAuth;