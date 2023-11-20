import { Routes, Route, useLocation } from 'react-router-dom';
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
                <Route exact path="/" element={<Main />} />
                <Route exact path="/auth" element={<Auth />} />
            </Routes>
        </>
    );
}

export default Router;
