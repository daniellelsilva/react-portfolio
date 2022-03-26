import React from 'react';
import PortContext from './PortContext';
import PropTypes from 'prop-types';

export default function PortProvider({ children }) {
  

  const context = {
    
  };

  return (
    <PortContext.Provider value={ context }>
      {children}
    </PortContext.Provider>
  );
}

PortProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
