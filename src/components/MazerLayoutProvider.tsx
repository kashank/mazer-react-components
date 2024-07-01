import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@assets/mazer/assets/compiled/css/app.css';
import '@assets/mazer/assets/compiled/css/app-dark.css';
import '@assets/mazer/assets/compiled/css/iconly.css';

export type MazerLayoutType = 'default' | 'single' | 'vertical-navbar';

export interface MazerLayoutConfig {
  type: MazerLayoutType; 
  sideBarContent?: React.ReactNode;
  navBarContent?: React.ReactNode;
  mainContent: React.ReactNode;
  logo?: string;
  backLink?: string;
  themeTone: string;
  toggleThemeTone: () => void;
}

const MazerLayoutContext = React.createContext<MazerLayoutConfig | undefined>(undefined);

export const useLayout = () => {
  const context = React.useContext(MazerLayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a MazerLayoutProvider');
  }
  return context;
};

interface MazerLayoutProviderProps {
  children: React.ReactNode;
  config: MazerLayoutConfig;
}

export const MazerLayoutProvider: React.FC<MazerLayoutProviderProps> = ({ children, config }) => {
  const [themeTone, setThemeTone] = React.useState('light');
  
  const toggleTheme = () => {
    setThemeTone((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', themeTone);
  }, [themeTone]);

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
    <MazerLayoutContext.Provider value={{...config, toggleThemeTone:toggleTheme}}>
    
        {children}
      
    </MazerLayoutContext.Provider>
  );
};
