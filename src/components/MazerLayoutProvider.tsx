import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@assets/mazer/assets/compiled/css/app.css';
import '@assets/mazer/assets/compiled/css/app-dark.css';
import '@assets/mazer/assets/compiled/css/iconly.css';

export type MazerLayoutType = 'default' | 'single' | 'vertical-navbar';

export interface BaseLayoutConfig {
  mainContent: React.ReactNode;
  logo?: string;
}

export interface DefaultLayoutConfig extends BaseLayoutConfig {
  type: 'default';
  sideBarContent?: React.ReactNode;
}

export interface SingleLayoutConfig extends BaseLayoutConfig {
  type: 'single';
  backLink?: string;
}

export interface VerticalNavbarLayoutConfig extends BaseLayoutConfig {
  type: 'vertical-navbar';
  sideBarContent?: React.ReactNode;
  navBarContent?: React.ReactNode;
  stickyNavbar?: boolean;
}

export type MazerLayoutConfig = DefaultLayoutConfig | SingleLayoutConfig | VerticalNavbarLayoutConfig;

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
  config: VerticalNavbarLayoutConfig | DefaultLayoutConfig | SingleLayoutConfig;
}

export const MazerLayoutProvider: React.FC<MazerLayoutProviderProps> = ({ children, config }) => {
  

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
    <MazerLayoutContext.Provider value={{...config, type:(
      config.type ?? 
      'navBarContent' in config ? 'vertical-navbar' :
      'backLink' in config ? 'single' : 
      'default'
    )}}>
        {children}
    </MazerLayoutContext.Provider>
  );
};
