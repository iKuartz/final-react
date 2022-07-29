import React from 'react';

// eslint-disable-next-line react/prop-types
function Error({ message }) {
  return (
    <p>{message || ''}</p>
  );
}

export default Error;
