import toast from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthorized } from '../utils/validators';

const PrivateRoutes = () => {
    const authorized = isAuthorized();
    if (authorized)
        return <Outlet />;
    else {
        toast.dismiss();
        toast("Please login to continue.");
        return <Navigate to='/signin' />;
    }
}

const PublicOnlyRoutes = () => {
    const authorized = isAuthorized();
    if (!authorized) return <Outlet />
    else return <Navigate to='/' />;
}

export { PrivateRoutes, PublicOnlyRoutes }