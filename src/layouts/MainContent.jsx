import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

const MainContent = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default MainContent