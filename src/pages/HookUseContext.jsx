import React, { useState, useContext, createContext } from "react";

// Create a context for the theme
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

function ThemedButton() {
    const theme = useContext(ThemeContext);  // Get the current theme from context
    const setTheme = useContext(ThemeUpdateContext);  // Get the function to update the theme from context

    // Toggle theme on button click
    const handleClick = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button onClick={handleClick} style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
            Theme: {theme}

        </button>
    );
}

export const HookUseContext = () => {
    // Manage the theme state here
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={setTheme}>
                <ThemedButton />
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
