import { createContext, useContext } from "react";

//step1 -> create a context and export it

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {} //we can create both var and function by creating the context
})

// step 2 -> also make a context provider in the same file

export const ThemeProvider = ThemeContext.Provider


// step 3 -> we can also create our own cutom hooks in the same file

export default function useTheme(){
    return useContext(ThemeContext)
}