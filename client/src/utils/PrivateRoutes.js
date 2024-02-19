import toast from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    let authorized = localStorage.getItem('auth');
    if(authorized)
        return <Outlet />;
    else{
        toast.dismiss();
        toast("Please login to continue.");
        return <Navigate to='/signin' replace />;
    }
}

export default PrivateRoutes