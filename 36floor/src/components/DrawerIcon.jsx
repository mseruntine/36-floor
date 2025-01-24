import React, { useState, memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';
import './styles/DrawerIcon.css'

const DrawerIcon = memo(({ onScrollToHome, onScrollToShows, onScrollToContact }) => {
  console.log("DrawerIcon rendered");
  console.log("onScrollToHome:", onScrollToHome);
  console.log("onScrollToShows:", onScrollToShows);
  console.log("onScrollToContact:", onScrollToContact);

  const [isOpen, setIsOpen] = useState(false);

  // Memoize the toggleDrawer function to prevent unnecessary re-renders
  const toggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState);
    console.log(`Drawer ${isOpen ? 'closed' : 'opened'}`);
  }, [isOpen]);

  // Memoize the handleScroll function
  const handleScroll = useCallback((scrollFunction) => {
    if (typeof scrollFunction === 'function') {
      scrollFunction();
      toggleDrawer();
    } else {
      console.error('Scroll function is not defined');
    }
  }, [toggleDrawer]);

  useEffect(() => {
    console.log("DrawerIcon props changed:", { onScrollToHome, onScrollToShows, onScrollToContact });
  }, [onScrollToHome, onScrollToShows, onScrollToContact]);

  // Memoize the drawer content to prevent unnecessary re-renders
  const drawerContent = useCallback(() => (
    <div className="drawer-content">
      <Link 
        as="button"
        onClick={() => handleScroll(onScrollToHome)}
        display="block" 
        padding="8px 0" 
        fontSize="16px" 
        _hover={{ color: 'blue.500' }}
      >
        Home
      </Link>
      <Link 
        as="button"
        onClick={() => handleScroll(onScrollToShows)}
        display="block" 
        padding="8px 0" 
        fontSize="16px" 
        _hover={{ color: 'blue.500' }}
      >
        Shows
      </Link>
      <Link 
        as="button"
        onClick={() => handleScroll(onScrollToContact)}
        display="block" 
        padding="8px 0" 
        fontSize="16px" 
        _hover={{ color: 'blue.500' }}
      >
        Contact
      </Link>
    </div>
  ), [handleScroll, onScrollToHome, onScrollToShows, onScrollToContact]);

  return (
    <div>
      {/* Toggle Button */}
      <div>
        {/* <button
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
        </button> */}
      </div>

      {/* Sliding Menu */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        {drawerContent()}
      </div>

      {/* Backdrop */}
      {isOpen && <div className="backdrop" onClick={toggleDrawer} />}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo
  return (
    prevProps.onScrollToHome === nextProps.onScrollToHome &&
    prevProps.onScrollToShows === nextProps.onScrollToShows &&
    prevProps.onScrollToContact === nextProps.onScrollToContact
  );
});

DrawerIcon.propTypes = {
  onScrollToHome: PropTypes.func.isRequired,
  onScrollToShows: PropTypes.func.isRequired,
  onScrollToContact: PropTypes.func.isRequired,
};

export default DrawerIcon;