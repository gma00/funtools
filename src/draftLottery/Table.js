import React from 'react';
import TableRow from './TableRow';

const Table = ({ data, onUpdate, onDelete }) => {
  return (
    <div>
      <table id="teams">
        <tr>
          <th>Team Name</th>
          <th>Percentage</th>
          <th>Action</th>
        </tr>
        <tbody>
          {data.map(row => {
            const percentage = row.percentage;
            return (
              <TableRow
                key={row.id}
                columnText={row.name}
                inputValue={percentage === 0 ? '' : percentage}
                onInputValueChanged={value => {
                  onUpdate(row.id, value);
                }}
                onButtonClicked={() => {
                  onDelete(row.id);
                }}
              />
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;