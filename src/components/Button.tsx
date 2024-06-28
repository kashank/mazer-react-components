import * as React from 'react';
import { useLayout } from './MazerLayoutProvider';

export const Button: React.FC<{ label: string }> = ({ label }) => {
  const { themeTone } = useLayout();
  return (
    <button className={`btn btn-${themeTone === 'light' ? 'primary' : 'secondary'}`}>
      {label}
    </button>
  );
};
