import toast from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoutes = () => {
    const user = useSelector(state => state.user);
    if (user)
        return <Outlet />;
    else {
        toast.dismiss();
        toast("Please login to continue.");
        return <Navigate to='/signin' />;
    }
}

const PublicOnlyRoutes = () => {
    const user = useSelector(state => state.user);
    if (!user) return <Outlet />
    else return <Navigate to='/' />;
}

export { PrivateRoutes, PublicOnlyRoutes }