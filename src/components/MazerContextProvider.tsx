import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@assets/mazer/assets/compiled/css/app.css';
import '@assets/mazer/assets/compiled/css/app-dark.css';
import '@assets/mazer/assets/compiled/css/iconly.css';
import { SidebarProvider, useSidebarContext } from '../contexts/SidebarContext';
import { SidebarItemProps } from './SidebarItem';

interface MazerContextConfig {
  theme: string;
  toggleTheme: () => void;
}

const MazerContext = React.createContext<MazerContextConfig | undefined>(undefined);

export const useTheme = () => {
  const context = React.useContext(MazerContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface MazerContextProviderProps {
  children: React.ReactNode;
  initialSidebarItems?: SidebarItemProps[];
}

export const MazerContextProvider: React.FC<MazerContextProviderProps> = ({ children, initialSidebarItems }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    import('@assets/mazer/assets/static/js/components/sidebar.js')
      .then((module) => {
        if (module && module.default) {
          const Sidebar = module.default;
          const sidebarEl = document.getElementById('sidebar');
          if (sidebarEl) {
            new Sidebar(sidebarEl);
          }
        }
      })
      .catch((error) => console.error('Error loading sidebar.js:', error));
  }, []);

  return (
    <MazerContext.Provider value={{ toggleTheme, theme }}>
      <SidebarProvider initialItems={initialSidebarItems}>
      {children}
      </SidebarProvider>
    </MazerContext.Provider>
  );
};
