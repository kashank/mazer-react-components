import React from "react";
import { MazerNavbarChildProps } from "./MazerNavbar";
import { MazerNavbarItem, MazerNavbarItemProps } from "./MazerNavbarItem";

export interface MazerNavbarDropdownProps extends MazerNavbarChildProps {
  title?: string;
  badgeText?: string;
  badgeStyle?: string;
  children?: MazerNavbarItemProps[];
}

export const MazerNavbarDropdown: React.FC<MazerNavbarDropdownProps> = ({ title, badgeText, badgeStyle, children, icon }) => {
  return (
    <>
      <li className="nav-item dropdown me-1">
        <a
          className="nav-link active dropdown-toggle text-gray-600"
          href="#"
          data-bs-toggle="dropdown"
        >
          {icon && (
            <i className={`bi bi-${icon} bi-sub fs-4`}></i>
          )}
          {badgeText &&
            <span className={`badge badge-notification bg-${badgeStyle ?? 'danger'}`}>{badgeText}</span>
          }
        </a>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          <li>
            <h6 className="dropdown-header">{title}</h6>
          </li>
          {children &&
            children.map((item, index) =>
              <MazerNavbarItem key={index}
                href={item.href}
                iconStyle={item.iconStyle}
                icon={item.icon}
                subText={item.subText}
                text={item.text} />
            )}
        </ul>
      </li>

    </>
  );
};
