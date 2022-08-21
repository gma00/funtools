import React, { useState } from 'react';

const TableRow = ({
  columnText,
  inputValue,
  onInputValueChanged,
  onButtonClicked
}) => {
  const [value, setValue] = useState(inputValue || '');
  return (
    <tr>
      <td>
        <p>{columnText}</p>
      </td>
      <td>
        <input
          type="text"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            onInputValueChanged(event.target.value);
          }}
        />
      </td>
      <td>
        <button
          onClick={onButtonClicked}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;