import { Outlet } from 'react-router-dom';
import Navber from './../components/Navber';

function Layout() {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
        </div>
    )
}

export default Layout
