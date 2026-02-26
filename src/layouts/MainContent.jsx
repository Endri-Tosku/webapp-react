import { Outlet } from "react-router-dom";

// importo la navbar
import NavBar from "../components/NavBar";

//  import del loader
import Loader from "../components/Loader";

// import hook custom del contesto globale
import { useGlobal } from "../contexts/GlobalContext";

const MainContent = () => {

    // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { isLoading } = useGlobal();

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="container">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default MainContent