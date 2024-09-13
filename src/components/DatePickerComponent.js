import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles

const DatePickerComponent = () => {
  // Initialize state with a default date
  const [startDate, setStartDate] = useState(new Date());

  // Function to handle date changes
  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div >
      <div>
       
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          dateFormat="MMMM d, yyyy"
          // className="date-picker-input"
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
