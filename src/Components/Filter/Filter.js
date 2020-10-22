import React from 'react';
import './Filter.scss';

export const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filter'>
      <label>Filter</label>
      <input
        placeholder='Currency..'
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
    </div>
  );
};
