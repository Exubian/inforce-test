import React from 'react';

const Dialog = (accept, cancel) => {

  return (
    <div>
      <button onClick={accept()}>Confirm</button>
      <button onClick={cancel()}>Cancel</button>
    </div>
  );
}

export default Dialog;
