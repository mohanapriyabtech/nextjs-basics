import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        background: theme === 'light' ? '#f9f9f9' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
      }}
    >
      <h1>Navbar - {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
};

export default Navbar;
