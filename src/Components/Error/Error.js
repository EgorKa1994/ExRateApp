import React from 'react';
import './Error.scss';

export const Error = ({ error }) => {
  return <div className='error'>Sorry, there is error: {error}</div>;
};
