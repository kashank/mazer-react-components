import * as React from "react";
import { Sidebar } from "../Sidebar";
import { useLayout } from "../MazerLayoutProvider";
import { TypeGuard } from "../../types/TypeGuard";

export const DefaultLayout: React.FC = () => {
  const config = useLayout();
  
  if(!TypeGuard.isDefaultConfig(config)){
    throw new Error('DefaultLayout must be used with default layout config');
  }

  return (
    <>
      <Sidebar logo={config.logo}>
        {config.sideBarContent}
      </Sidebar>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div className="page-heading">
          <div className="page-title"></div>
          <section className="section"></section>
          {config.mainContent}
        </div>
      </div>
    </>
  );
};
