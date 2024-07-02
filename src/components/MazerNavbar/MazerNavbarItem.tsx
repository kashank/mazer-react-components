import React from 'react';
import { MazerNavbarChildProps } from './MazerNavbar';

export interface MazerNavbarItemProps extends MazerNavbarChildProps {
  text?: string;
  href?: string;
  iconStyle?: string;
  subText?: string;
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
              <div className={`notification-icon bg-${props.iconStyle ? props.iconStyle : 'primary'}`}>
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
