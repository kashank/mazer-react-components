import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@assets/mazer/assets/compiled/css/app.css';
import '@assets/mazer/assets/compiled/css/app-dark.css';
import '@assets/mazer/assets/compiled/css/iconly.css';

import { SidebarProvider } from '../contexts/SidebarContext';
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
  sidebarItemIsActive?: (sidebarItem: SidebarItemProps)=>boolean;
}

export const MazerContextProvider: React.FC<MazerContextProviderProps> = ({ children, initialSidebarItems, sidebarItemIsActive }) => {
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

    import('@assets/mazer/assets/extensions/perfect-scrollbar/perfect-scrollbar.js')
    .then((module) => {
      const PerfectScrollbar = module.default || module;
      import('@assets/mazer/assets/static/js/components/sidebar.js')
        .then((module) => {
          const Sidebar = module.default || module;
          const sidebarEl = document.getElementById('sidebar');
          if (sidebarEl) {
            new window.Sidebar(sidebarEl);
          }
        })
        .catch((error) => console.error('Error loading sidebar.js:', error));
    })
    .catch((error) => console.error('Error loading perfect-scrollbar.min.js:', error));
  
  }, []);

  return (
    <MazerContext.Provider value={{ toggleTheme, theme }}>
      <SidebarProvider initialItems={initialSidebarItems} sidebarItemIsActive={sidebarItemIsActive}>
        {children}
      </SidebarProvider>
    </MazerContext.Provider>
  );
};
