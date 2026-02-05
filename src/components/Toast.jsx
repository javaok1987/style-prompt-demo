import React from 'react';

const Toast = ({ show, message }) => {
  return (
    <div id="toast" className={show ? 'show' : ''}>
      {message}
    </div>
  );
};

export default Toast;
