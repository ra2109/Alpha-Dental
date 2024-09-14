import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles

const DatePickerComponent = ({ selected, onChange }) => {
  return (
    <div>
      <DatePicker
      placeholderText='Select any Date'
        selected={selected}
        onChange={onChange}
        dateFormat="MMMM d, yyyy"
        className="date-picker-input"
      />
    </div>
  );
};

export default DatePickerComponent;

