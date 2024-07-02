import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarProvider } from "../contexts/SidebarContext";
import { ThemeProvider } from "../contexts/ThemeContext";

interface SidebarProps {
  children: React.ReactNode;
  logo?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  return (
    <SidebarProvider>
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper ps ps--active-y">
          <div className="sidebar-header position-relative">
            <div className="d-flex justify-content-between align-items-center">
              {props.logo && (
                <div className="logo">
                  <a href="index.html">
                    <img src={props.logo} alt="Logo"></img>
                  </a>
                </div>
              )}
              {!props.logo && <div className="navbar-brand ms-4"></div>}
              <ThemeProvider>
                <ThemeToggle />
              </ThemeProvider>
              <div className="sidebar-toggler  x">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">{props.children}</ul>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
