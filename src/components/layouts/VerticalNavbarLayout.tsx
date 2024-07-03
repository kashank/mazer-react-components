import * as React from "react";
import { Sidebar } from "../Sidebar";
import { MazerNavbar, MazerNavbarChildProps } from "../MazerNavbar/MazerNavbar";
import { SidebarItemProps } from "../SidebarItem";
import { useSidebarContext } from "../../contexts/SidebarContext";

interface VerticalNavbarLayoutProps {
  sidebarItems?: SidebarItemProps[];
  navbar: MazerNavbarChildProps[];
  children: React.ReactNode;
}
export const VerticalNavbarLayout: React.FC<VerticalNavbarLayoutProps> = ({sidebarItems, navbar, children}) => {
  const sidebar = useSidebarContext();

  return (
    <>
      <Sidebar sidebarItems={sidebarItems ?? sidebar.sidebarItems} />
      <div id="main" className="layout-navbar navbar-fixed">
        <header>
          <nav className="navbar navbar-expand navbar-light navbar-top">
            <div className="container-fluid">
              <a href="#" className="burger-btn d-block">
                <i className="bi bi-justify fs-3"></i>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
               <MazerNavbar children={navbar} />
                {/*
                
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton"
                    style={{ minWidth: "11rem" }}
                  >
                    <li>
                      <h6 className="dropdown-header">Hello, John!</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="icon-mid bi bi-person me-2"></i> My
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="icon-mid bi bi-gear me-2"></i>
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="icon-mid bi bi-wallet me-2"></i>
                        Wallet
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="icon-mid bi bi-box-arrow-left me-2"></i>{" "}
                        Logout
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </nav>
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
