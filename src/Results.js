import React from 'react';

const Results = ({ results }) => {
  return (
    <ul>
      {results.map(item => {
        return <li>{item}</li>
      })}
    </ul>
  );
};

export default Results;