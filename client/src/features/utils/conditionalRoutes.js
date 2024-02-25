import toast from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './getters';

const PrivateRoutes = () => {
    const authorized = getToken();
    if (authorized)
        return <Outlet />;
    else {
        toast.dismiss();
        toast("Please login to continue.");
        return <Navigate to='/signin' />;
    }
}

const PublicOnlyRoutes = () => {
    const authorized = getToken();
    if (!authorized) return <Outlet />
    else return <Navigate to='/' />;
}

export { PrivateRoutes, PublicOnlyRoutes }