import React from 'react';

import Loader from '../common/Loader';
import { Navigate } from 'react-router-dom';
import useIsAdmin from '../hooks/useIsAdmin';

const AdminProtectRouts = ({ children }) => {
    const { isPending,  isAdmin, user, loader } = useIsAdmin()

    if (loader || isPending) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate  to='/login'></Navigate>
};

export default AdminProtectRouts;