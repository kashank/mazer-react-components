import React from 'react';

interface MazerNavbarItemProps {
  text?: string;
  href?: string;
  icon?: string;
  iconBackground?: string;
  subText?: string;
  children?: React.ReactNode;
}

export const MazerNavbarItem: React.FC<MazerNavbarItemProps> = (props: MazerNavbarItemProps) => {
  
  return (
    <>
        {
          props.icon && 
          props.href && 
          props.text &&
          
          <li className="dropdown-item notification-item">
            <a className="d-flex align-items-center" href={props.href}>
              <div className={`notification-icon bg-${props.iconBackground ? props.iconBackground : 'primary'}`}>
                <i className={`bi bi-${props.icon}`}></i>
              </div>
              <div className="notification-text ms-4">
                <p className="notification-title font-bold">{props.text}</p>
                <p className="notification-subtitle font-thin text-sm">{props.subText}</p>
              </div>
            </a>
          </li>
        }
        
        { !props.icon && 
          props.text &&
            <li>
              {
                props.href &&
                <a className="dropdown-item" href={props.href}>{props.text}</a>
              }
              {
                !props.href &&
                <span className="dropdown-item">{props.text}</span>
              }
            </li>
        }
      </>
  );
};
