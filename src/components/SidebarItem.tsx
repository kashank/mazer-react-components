import React from 'react';
import { SidebarProvider, useSidebarContext } from '../contexts/SidebarContext';

interface SidebarItemProps {
  title?: string;
  text?: string;
  href?: string;
  children?: React.ReactNode;
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
            <ul className={`submenu ${nestingLevel > 0 ? `submenu-level-${nestingLevel+1} ` : ''}submenu-closed`}>{props.children}</ul>
          </>
        )}
      </li>
    </SidebarProvider>
  );
};
