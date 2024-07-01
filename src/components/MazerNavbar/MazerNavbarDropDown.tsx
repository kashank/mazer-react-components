import React from "react";

interface MazerNavbarDropdownProps {
  icon?: string;
  title?: string;
  badgeText?: string;
  badgeStyle?: string;
  children?: React.ReactNode;
}

export const MazerNavbarDropdown: React.FC<MazerNavbarDropdownProps> = (
  props: MazerNavbarDropdownProps
) => {
  return (
    <>
      <li className="nav-item dropdown me-1">
            <a
              className="nav-link active dropdown-toggle text-gray-600"
              href="#"
              data-bs-toggle="dropdown"
            >
              {props.icon && (
                <i className={`bi bi-${props.icon} bi-sub fs-4`}></i>
              )}
              {props.badgeText &&
                <span className={`badge badge-notification bg-${props.badgeStyle ?? 'danger'}`}>{props.badgeText}</span>
              }
            </a>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <h6 className="dropdown-header">{props.title}</h6>
              </li>
              {props.children}
            </ul>
          </li>
    
    </>
  );
};
