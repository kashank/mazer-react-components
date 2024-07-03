import * as React from "react";
import { Sidebar } from "../Sidebar";
import { SidebarItemProps } from "../SidebarItem";
import { useSidebarContext } from "../../contexts/SidebarContext";

interface DefaultLayoutProps{
  sidebarItems?: SidebarItemProps[];
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({sidebarItems, children}) => {
  const sidebar = useSidebarContext();

  return (
    <>
      <Sidebar sidebarItems={sidebarItems ?? sidebar.sidebarItems} />
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>

        <div className="page-heading">
          <div className="page-title"></div>
          <section className="section"></section>
          {children}
        </div>
      </div>
    </>
  );
};
