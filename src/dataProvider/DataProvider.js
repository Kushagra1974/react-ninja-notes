import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
export const DataContext = createContext();
export function DataProvider({ children }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(params) {
            try {
                const res = await fetch("http://localhost:8000/notes");
                const dt = await res.json();
                setData(dt);
            }
            catch (e) {
                console.error(e, "error hai");
            }
        }
        fetchData();
    }, [])

    return (<DataContext.Provider value={[data, setData]}>
        {children}
    </DataContext.Provider>)
}