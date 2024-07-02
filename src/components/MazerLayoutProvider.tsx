import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@assets/mazer/assets/compiled/css/app.css';
import '@assets/mazer/assets/compiled/css/app-dark.css';
import '@assets/mazer/assets/compiled/css/iconly.css';

const MazerLayoutContext = React.createContext(undefined);

export const useLayout = () => {
  const context = React.useContext(MazerLayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a MazerLayoutProvider');
  }
  return context;
};

interface MazerLayoutProviderProps{
  children: React.ReactNode;
}

export const MazerLayoutProvider: React.FC<MazerLayoutProviderProps> = ({children}) => {
  

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
    <MazerLayoutContext.Provider value={undefined}>
        {children}
    </MazerLayoutContext.Provider>
  );
};
