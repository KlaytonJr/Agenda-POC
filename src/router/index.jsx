import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import ItemDetails from '../pages/ItemDetails';

function Router() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/auth' && <Navbar />}
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/auth" element={<Auth />} />
                <Route path="/vaga/:vagaId" element={<ItemDetails />} />
                {/* /vaga/24 */}
            </Routes>
        </>
    );
}

export default Router;
