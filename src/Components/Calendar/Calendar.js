import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export const Calendar = ({ setRangeDate, rangeDate }) => {
  return (
    <div>
      <DateRangePicker
        value={rangeDate}
        calendarAriaLabel='Toggle calendar'
        onChange={(e) => {
          setRangeDate(e);
        }}
      />
    </div>
  );
};
