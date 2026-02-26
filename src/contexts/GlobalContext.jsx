// import dei componenti di React per composizione context
import { createContext, useContext, useState } from "react";

// creiamo istanza del context
const GlobalContext = createContext();

// funzione che genera il provider esponendo i valori per vrappare App.jsx
function GlobalProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// Definiamo un hook per consumare il contesto
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

// Esportiamo il nostro provider ed il nostro hook
export { GlobalProvider, useGlobal }