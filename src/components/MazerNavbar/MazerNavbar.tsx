import React from "react";

interface MazerNavbarProps {
  text?: string;
  title?: string;
  children?: React.ReactNode;
}

export const MazerNavbar: React.FC<MazerNavbarProps> = (props: MazerNavbarProps) => {
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
