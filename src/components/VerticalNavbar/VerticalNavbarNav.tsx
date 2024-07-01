import React from "react";
import { VerticalNavBarItem } from "..";

interface VerticalNavbarNavProps {
  text?: string;
  title?: string;
  children?: React.ReactNode;
}

export const VerticalNavbarNav: React.FC<VerticalNavbarNavProps> = (
  props: VerticalNavbarNavProps
) => {
  return (
    <>
      {
        <ul className="navbar-nav ms-auto mb-lg-0">
        {props.children}
        </ul>
      }
    </>
  );
};
