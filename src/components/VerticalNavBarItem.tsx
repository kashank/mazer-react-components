import React from 'react';

interface VerticalNavbarItemProps {
  text?: string;
  href?: string;
  children?: React.ReactNode;
}

export const VerticalNavBarItem: React.FC<VerticalNavbarItemProps> = (props: VerticalNavbarItemProps) => {
  
  const isSubItem = false;

  return (
    <>
        {props.children &&
            <li className="nav-item dropdown me-1">
              <a className="nav-link active dropdown-toggle text-gray-600" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-envelope bi-sub fs-4"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <h6 className="dropdown-header">Mail</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">No New Mail</a>
                </li>
              </ul>
                
            </li>
        }
      {/* <li className={`${(isSubItem ? `submenu-item` : `sidebar-${props.text ? `title` : `item`}`)} ${props.children ? `has-sub`:``}`}>
        {props.href && (
          <a href={props.href} className={isSubItem ? 'submenu-link' : 'sidebar-link'}>
            {props.text}
          </a>
        )}
         {!props.href && !props.children && props.text}
        {props.children && (
          <>
            <a href="#" className={isSubItem ? 'submenu-link' : 'sidebar-link'}>
              <span>{props.text}</span>
            </a>
            <ul className={`submenu ${isSubItem ? `submenu-level-${nestingLevel+1} ` : ''}submenu-closed`}>{props.children}</ul>
          </>
        )} 
      </li> */}
      </>
  );
};
