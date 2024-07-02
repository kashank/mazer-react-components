import * as React from "react";

interface SingleColumnLayoutProps{
  backButtonLink?: string;
  children: React.ReactNode;
}
export const SingleColumnLayout: React.FC<SingleColumnLayoutProps> = ({backButtonLink, children}) => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container d-block">
          <a href={backButtonLink ?? "#"}><i className="bi bi-chevron-left"></i></a>
          {undefined &&
            <a className="navbar-brand ms-4" href="index.html">
              <img src={undefined} />
            </a>
          }
          {
            undefined &&
            <a className="navbar-brand ms-4"></a>
          }
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  );
};
