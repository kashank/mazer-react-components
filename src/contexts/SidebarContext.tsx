import React, { createContext, useContext, ReactNode, useState } from 'react';
import { SidebarItemProps } from '../components/SidebarItem';

interface SidebarContextProps {
  nestingLevel: number;
  sidebarItems: SidebarItemProps[];
  setItems: (items: SidebarItemProps[]) => void;
  defaultItemIsActive: (sidebarItem: SidebarItemProps) => boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};

interface SidebarProviderProps {
  children: React.ReactNode;
  initialItems?: SidebarItemProps[];
  nestingLevel?: number;
  sidebarItemIsActive?: (sidebarItem: SidebarItemProps) => boolean;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children, initialItems = [], nestingLevel = 0, sidebarItemIsActive }) => {
  const [sidebarItems, setItems] = useState<SidebarItemProps[]>(initialItems);
  const defaultIsActiveFn = sidebarItemIsActive || ((item: SidebarItemProps) => window.location.pathname === (item.href ?? ""));

  return (
    <SidebarContext.Provider value={{ sidebarItems, setItems, nestingLevel, defaultItemIsActive: defaultIsActiveFn }}>
      {children}
    </SidebarContext.Provider>
  );
};
