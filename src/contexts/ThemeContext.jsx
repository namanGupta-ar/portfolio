import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);


  const darkTheme = (isDark) => {
    if (isDark) {
      setThemeMode('dark');
      localStorage.setItem('myPortfolioProfileTheme', 'dark');
    } else {
      setThemeMode('light');
      localStorage.setItem('myPortfolioProfileTheme', 'light');
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('myPortfolioProfileTheme');
    if (!getTheme) {
      return;
    }
    setThemeMode(getTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  return useContext(ThemeContext);
}
