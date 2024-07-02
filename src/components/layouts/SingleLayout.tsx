import * as React from "react";
export const SingleLayout: React.FC = () => {
  
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container d-block">
          <a href={undefined ?? "#"}><i className="bi bi-chevron-left"></i></a>
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
        {undefined}
      </div>
    </>
  );
};
