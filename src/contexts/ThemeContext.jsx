import { createContext, useState } from "react";

export const Theme = createContext();

export function ThemeProvider ({ children }) {
     const [ isDark, setIsDark ] = useState(false);

     return (
        <Theme.Provider value={[ isDark, setIsDark ]}>
            { children }
        </Theme.Provider>
     )
}