import * as React from 'react';
import { useTheme } from './MazerThemeProvider';

const Button: React.FC<{ label: string }> = ({ label }) => {
  const { theme } = useTheme();
  return (
    <button className={`btn btn-${theme === 'light' ? 'primary' : 'secondary'}`}>
      {label}
    </button>
  );
};

export default Button;
