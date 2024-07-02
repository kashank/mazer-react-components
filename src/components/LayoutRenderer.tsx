import React from 'react';
import { useLayout } from './MazerLayoutProvider';
import { DefaultLayout } from './layouts/DefaultLayout';
import { SingleLayout } from './layouts/SingleLayout';
import { VerticalNavbarLayout } from './layouts/VerticalNavbarLayout';

export const LayoutRenderer: React.FC = () => {
  const config  = useLayout();

  switch (config.type) {
    case 'single':
      return <SingleLayout />;
    case 'vertical-navbar':
      return <VerticalNavbarLayout />;
    case 'default':
    default:
      return <DefaultLayout />; 
  }
};
