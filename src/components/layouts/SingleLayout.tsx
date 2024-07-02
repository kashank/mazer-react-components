import * as React from "react";
import { useLayout } from "../MazerLayoutProvider";
import { TypeGuard } from "../../types/TypeGuard";

export const SingleLayout: React.FC = () => {
  const config = useLayout();

  if(!TypeGuard.isSingleLayoutConfg(config)){
    throw new Error('SingleLayout must be used with single layout config');
  }
  
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container d-block">
          <a href={config.backLink ?? "#"}><i className="bi bi-chevron-left"></i></a>
          {config.logo &&
            <a className="navbar-brand ms-4" href="index.html">
              <img src={config.logo} />
            </a>
          }
          {
            !config.logo &&
            <a className="navbar-brand ms-4"></a>
          }
        </div>
      </nav>
      <div className="container">
        {config.mainContent}
      </div>
    </>
  );
};
