import React from 'react';

const MyModal = ({children, close, variable}) => {
  
  return (
    <div 
      className="modal" 
      onClick={e => (e.target == e.currentTarget) ? close(variable): false }
    >
      {children}
    </div>
  );
}

export default MyModal;
