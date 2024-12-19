import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import {Outlet} from "react-router";

function Layout() {
    return (
        <>
            <HeaderNavbar/>
            <Outlet/>
        </>
    )
}

export default Layout;