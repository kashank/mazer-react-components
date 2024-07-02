import React from "react";
import { MazerNavbarDropdown, MazerNavbarDropdownProps } from "./MazerNavbarDropDown";
import { MazerNavbarItem, MazerNavbarItemProps } from "./MazerNavbarItem";

export interface MazerNavbarChildProps {
  icon?: string;
}

export interface MazerNavbarProps {
  children?: MazerNavbarChildProps[];
}
const isDropdown = (item: MazerNavbarChildProps): item is MazerNavbarDropdownProps => {
  return (item as MazerNavbarDropdownProps).children !== undefined;
};

export const MazerNavbar: React.FC<MazerNavbarProps> = (props: MazerNavbarProps) => {
  return (
    <>
      {
        <ul className="navbar-nav ms-auto mb-lg-0">
          {props.children &&
            props.children.map((item, index) => {
              if (isDropdown(item)) {
                const navItem = item as MazerNavbarDropdownProps;
                return (
                  <MazerNavbarDropdown
                    key={index}
                    badgeStyle={navItem.badgeStyle}
                    badgeText={navItem.badgeText}
                    icon={navItem.icon}
                    title={navItem.title}
                    children={navItem.children}
                  />)
              } else {
                const navItem = item as MazerNavbarItemProps;
                return (<MazerNavbarItem
                  key={index}
                  href={navItem.href}
                  icon={navItem.icon}
                  iconStyle={navItem.iconStyle}
                  subText={navItem.subText}
                  text={navItem.text}
                />)
              }
            }
            )}
        </ul>
      }
    </>
  );
};
