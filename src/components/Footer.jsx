import React from 'react';
import './footer.css'
import { ThemeContext } from '../context';
import { useContext } from 'react';

function Footer() {
    const theme = useContext(ThemeContext)
    const darkMode= theme.state.darkMode

  return (
    <footer className="footer" style={{backgroundColor: darkMode && "white", color: darkMode && "black"}}>
      <div className="container">
        <p>&copy; 2023 Aryaman Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
