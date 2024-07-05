import React from 'react';
import { SidebarProvider, useSidebarContext } from '../contexts/SidebarContext';

export interface SidebarItemProps {
  title?: string;
  text?: string;
  href?: string;
  children?: SidebarItemProps[];
  isActive?: (sidebarItem: SidebarItemProps) => boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({isActive, href, text, title, children}: SidebarItemProps) => {
  const { nestingLevel, defaultItemIsActive } = useSidebarContext();
  const isSubItem = nestingLevel > 0;
  const active = isActive ? isActive({href,text,title,children}) : defaultItemIsActive({href, text, title, children});

  return (
    <SidebarProvider nestingLevel={nestingLevel + 1}>
      <li className={`${(isSubItem ? `submenu-item` : `sidebar-${title ? `title` : `item`}`)}${children ? ` has-sub`:``}${(active ? ' active':'')}`}>
        {href && (
          <a href={href} className={`${(isSubItem ? 'submenu-link' : 'sidebar-link')}`}>
            {text}
          </a>
        )}
        {title && !href &&
         <>{title}</>
        }
        {!href && !children && text}
        {children && (
          <>
            <a href="#" className={isSubItem ? 'submenu-link' : 'sidebar-link'}>
              <span>{text}</span>
            </a>
            <ul className={`submenu ${nestingLevel > 0 ? `submenu-level-${nestingLevel+1} ` : ''}submenu-closed`}>{children.map((sidebarItem,index)=>
            <SidebarItem key={index}
            href={sidebarItem.href}
            text={sidebarItem.text}
            children={sidebarItem.children} />
            )}</ul>
          </>
        )}
      </li>
    </SidebarProvider>
  );
};
