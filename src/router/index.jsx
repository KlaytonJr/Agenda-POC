import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import { useAuth } from '../context/AuthProvider';

function Router() {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/auth' && <Navbar />}
            <Routes>
                <Route path="/auth" element={auth === "" ? <Auth /> : <Navigate to="/" />} />
                <Route path="/" element={auth === "" ? <Navigate to="/auth" /> : <Main />} />
            </Routes>
        </>
    );
}

export default Router;
