import React, { createContext, useContext, ReactNode, useState } from "react";

interface MazerThemeContextConfig {
  themeTone: string;
  toggleThemeTone: () => void;
}

const ThemeContext = createContext<MazerThemeContextConfig | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeTone, setThemeTone] = React.useState("light");

  const toggleTheme = () => {
    setThemeTone((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", themeTone);
  }, [themeTone]);

  return (
    <ThemeContext.Provider value={{ themeTone, toggleThemeTone: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
