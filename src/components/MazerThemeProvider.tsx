import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/mazer/assets/compiled/css/app.css';
import '../assets/mazer/assets/compiled/css/app-dark.css';
import '../assets/mazer/assets/compiled/css/iconly.css';


interface MazerThemeContextType {
  theme: string;
  customStyles: React.CSSProperties;
  toggleTheme: () => void;
  updateCustomStyles: (styles: React.CSSProperties) => void;
}

const MazerThemeContext = React.createContext<MazerThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = React.useContext(MazerThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a MazerThemeProvider ');
  }
  return context;
};

interface MazerThemeProviderProps {
  children: React.ReactNode;
}

export const MazerThemeProvider = ({ children }: MazerThemeProviderProps) => {
  const [theme, setTheme] = React.useState('light');
  const [customStyles, setCustomStyles] = React.useState<React.CSSProperties>({});

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const updateCustomStyles = (styles: React.CSSProperties) => {
    setCustomStyles((prevStyles) => ({ ...prevStyles, ...styles }));
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <MazerThemeContext.Provider value={{ theme, customStyles, toggleTheme, updateCustomStyles }}>
      <div className={`app ${theme}`} style={customStyles}>
        {children}
      </div>
    </MazerThemeContext.Provider>
  );
};
