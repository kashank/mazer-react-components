import React from 'react';
import { useLayout } from './MazerLayoutProvider';
import { DefaultLayout } from './layouts/DefaultLayout';

export const LayoutRenderer: React.FC = () => {
  const { type } = useLayout();

  switch (type) {
    case 'single-column':
      return <DefaultLayout />;
    case 'vertical-navbar':
      return <DefaultLayout />;
    case 'default':
    default:
      return <DefaultLayout />; 
  }
};
