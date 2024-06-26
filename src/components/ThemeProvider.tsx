import * as React from 'react';

interface ThemeContextType {
  theme: string;
  customStyles: React.CSSProperties;
  toggleTheme: () => void;
  updateCustomStyles: (styles: React.CSSProperties) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState('light');
  const [customStyles, setCustomStyles] = React.useState<React.CSSProperties>({});

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const updateCustomStyles = (styles: React.CSSProperties) => {
    setCustomStyles((prevStyles) => ({ ...prevStyles, ...styles }));
  };

  return (
    <ThemeContext.Provider value={{ theme, customStyles, toggleTheme, updateCustomStyles }}>
      <div className={`app ${theme}`} style={customStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
