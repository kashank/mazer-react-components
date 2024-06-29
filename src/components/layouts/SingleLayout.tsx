import * as React from "react";
import { useLayout } from "../MazerLayoutProvider";

export const SingleLayout: React.FC = () => {
  const { mainContent, logo, backLink} = useLayout();

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container d-block">
          <a href={backLink ?? "#"}><i className="bi bi-chevron-left"></i></a>
          {logo &&
            <a className="navbar-brand ms-4" href="index.html">
              <img src={logo} />
            </a>
          }
          {
            !logo &&
            <a className="navbar-brand ms-4"></a>
          }
        </div>
      </nav>
      <div className="container">
        {mainContent}
      </div>
    </>
  );
};
