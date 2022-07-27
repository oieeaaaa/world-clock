import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../data/theme.json';

export const ThemeContext = React.createContext({ 
  theme: theme.morning,
  updateTheme: null
});

export const useTheme = () => {
  const values = useContext(ThemeContext);

  return values;
}

export const ThemeContextProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState('morning');

  return (
    <ThemeContext.Provider value={{ main: theme[activeTheme], updateTheme: setActiveTheme }}>
      <ThemeProvider theme={theme[activeTheme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
