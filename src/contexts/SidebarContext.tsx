import React, { createContext, useContext, ReactNode, useState } from 'react';

interface SidebarContextProps {
  nestingLevel: number;
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
  nestingLevel?: number;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children, nestingLevel = 0 }) => {
  return (
    <SidebarContext.Provider value={{ nestingLevel }}>
      {children}
    </SidebarContext.Provider>
  );
};
