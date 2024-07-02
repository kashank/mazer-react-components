import React from 'react';
import { SidebarProvider, useSidebarContext } from '../contexts/SidebarContext';

export interface SidebarItemProps {
  title?: string;
  text?: string;
  href?: string;
  children?: SidebarItemProps[];
}

export const SidebarItem: React.FC<SidebarItemProps> = (props: SidebarItemProps) => {
  const { nestingLevel } = useSidebarContext();
  const isSubItem = nestingLevel > 0;

  return (
    <SidebarProvider nestingLevel={nestingLevel + 1}>
      <li className={`${(isSubItem ? `submenu-item` : `sidebar-${props.title ? `title` : `item`}`)} ${props.children ? `has-sub`:``}`}>
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
            <ul className={`submenu ${nestingLevel > 0 ? `submenu-level-${nestingLevel+1} ` : ''}submenu-closed`}>{props.children.map((sidebarItem,index)=>
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
