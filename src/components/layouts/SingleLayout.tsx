import * as React from "react";
import { useLayout } from "../MazerLayoutProvider";

interface SingleLayoutProps {
  backLink?: string;
}

export const SingleLayout: React.FC<SingleLayoutProps> = (props: SingleLayoutProps) => {
  const { mainContent, logo } = useLayout();

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container d-block">
          <a href={props.backLink ?? "#"}><i className="bi bi-chevron-left"></i></a>
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
