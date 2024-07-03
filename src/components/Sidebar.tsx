import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarProvider } from "../contexts/SidebarContext";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";

interface SidebarProps {
  sidebarItems: SidebarItemProps[];
  logo?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarItems, logo }) => {
  return (
    
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper ps ps--active-y">
          <div className="sidebar-header position-relative">
            <div className="d-flex justify-content-between align-items-center">
              {logo && (
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo"></img>
                  </a>
                </div>
              )}
              {!logo && <div className="navbar-brand ms-4"></div>}

              <ThemeToggle />

              <div className="sidebar-toggler x">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              {sidebarItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    
  );
};
