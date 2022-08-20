import React, { useState } from 'react';

const RowEntry = ({ onAdd }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button
        style={{ marginLeft: 8 }}
        onClick={() => {
          onAdd(value);
          setValue('');
        }}
      >
        Add Team
      </button>
    </div>
  );
};

export default RowEntry;