import React from 'react';
import { useLayout } from './MazerLayoutProvider';
import { DefaultLayout } from './layouts/DefaultLayout';
import { SingleLayout } from './layouts/SingleLayout';
import { VerticalNavBarLayout } from './layouts/VerticalNavBarLayout';

export const LayoutRenderer: React.FC = () => {
  const { type } = useLayout();

  switch (type) {
    case 'single':
      return <SingleLayout />;
    case 'vertical-navbar':
      return <VerticalNavBarLayout />;
    case 'default':
    default:
      return <DefaultLayout />; 
  }
};
