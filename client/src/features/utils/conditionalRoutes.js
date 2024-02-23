import toast from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const authorized = localStorage.getItem('auth');
    if (authorized)
        return <Outlet />;
    else {
        toast.dismiss();
        toast("Please login to continue.");
        return <Navigate to='/signin' />;
    }
}

const PublicOnlyRoutes = () => {
    const authorized = localStorage.getItem('auth');
    if (!authorized) return <Outlet />
    else return <Navigate to='/' />;
}

export { PrivateRoutes, PublicOnlyRoutes }