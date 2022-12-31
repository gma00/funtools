import React from 'react';

const Results = ({ results }) => {
  return (
    <ol>
      {results.map(item => {
        return <li>{item}</li>
      })}
    </ol>
  );
};

export default Results;