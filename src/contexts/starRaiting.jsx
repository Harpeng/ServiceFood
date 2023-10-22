import { createContext, useState } from "react";

export const StarRaitingContext = createContext();

export const StarRaitingProvider = ({children}) => {
    const [rating, setRating] = useState(defaultState);
    const toggleTheme = () => {
        setTheme(theme === "default" ? "dark" : "default")
    }
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children }</ThemeContext.Provider>
}