import React, { useState, useEffect, createContext } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = (props) => {

    // States
    const [darkMode, setDarkMode] = useState(true);
    const [cargandoDarkMode, setCargandoDarkMode] = useState(true);

    // Sacar / Almacenar en localStorage
    useEffect(() => {
        const consultarLS = () => {
            const darkModeLS = localStorage.getItem('darkMode');

            if (darkModeLS) {
                setDarkMode(darkModeLS === 'true');
            } else {
                localStorage.setItem('darkMode', darkMode);
            }

            setCargandoDarkMode(false);
        }
        consultarLS();
    }, [darkMode])

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                cargandoDarkMode,
                setDarkMode,
            }}
        >
            { props.children }
        </DarkModeContext.Provider>
    );
}

export default DarkModeProvider;