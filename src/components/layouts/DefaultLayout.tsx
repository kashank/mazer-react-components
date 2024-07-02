import * as React from "react";
import { Sidebar } from "../Sidebar";

interface DefaultLayoutProps{
  sideBar: typeof Sidebar;
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props: DefaultLayoutProps) => {
  return (
    <>
      {props.sideBar}
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div className="page-heading">
          <div className="page-title"></div>
          <section className="section"></section>
          {props.children}
        </div>
      </div>
    </>
  );
};
