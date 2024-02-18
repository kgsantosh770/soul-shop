import toast from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = { 'token': false }
    if(auth.token)
        return <Outlet />;
    else{
        toast.dismiss();
        toast("Please signin to continue.");
        return <Navigate to='/signin' replace />;
    }
}

export default PrivateRoutes