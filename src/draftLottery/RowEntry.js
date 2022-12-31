import React, { useState } from 'react';

const RowEntry = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const addEntry = input => {
    onAdd(input);
    setValue('');
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Team Name..."
        onKeyUp={event => {
          if (
            event && 
            event.keyCode === 13
          ) {
            addEntry(value);
          } 
        }}
      />
      <button
        className="button"
        style={{ marginLeft: 8 }}
        onClick={() => {
          addEntry(value);
        }}
        disabled={value.length === 0}
      >
        Add Team
      </button>
    </div>
  );
};

export default RowEntry;