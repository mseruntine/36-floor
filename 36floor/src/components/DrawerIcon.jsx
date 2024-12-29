import React, { useState } from 'react';

function DrawerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    console.log('Drawer closed');
  };

  const onOpen = () => {
    setIsOpen(true);
    console.log('Drawer opened');
  };

  return (
    <div>
      {/* Hamburger Icon Button */}
      <button
        className="hamburger-btn"
        onClick={onOpen}
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Sliding Menu */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="drawer-content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="backdrop" onClick={onClose} />}
    </div>
  );
}

export default DrawerIcon;