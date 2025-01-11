import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';
import './styles/DrawerIcon.css'

function DrawerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    console.log(`Drawer ${isOpen ? 'closed' : 'opened'}`);
  };

  return (
    <div>
      {/* Toggle Button */}
      <div>
        <button
          className="hamburger-btn"
          onClick={toggleDrawer}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Sliding Menu */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
        <Link href="#home" display="block" padding="8px 0" fontSize="16px" _hover={{ color: 'blue.500' }}>
            Home
          </Link>
          <Link href="#about" display="block" padding="8px 0" fontSize="16px" _hover={{ color: 'blue.500' }}>
            Shows
          </Link>
          <Link href="#contact" display="block" padding="8px 0" fontSize="16px" _hover={{ color: 'blue.500' }}>
            Contact
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="backdrop" onClick={toggleDrawer} />}
    </div>
  );
}

export default DrawerIcon;