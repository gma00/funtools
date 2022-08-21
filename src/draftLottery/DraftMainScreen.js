import React, { useState } from 'react';
import Table from './Table';
import RowEntry from './RowEntry';
import Results from './Results';
import { generate } from './generate.js';
import sticks from './artifacts/sticks.svg';
import './DraftMainScreen.css';

const DraftMainScreen = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);

  const updateItem = (id, value, data) => {
    const idIndex = data.findIndex(item => item.id === id);
    data[idIndex] = { ...data[idIndex], percentage: value };
    return data;
  };

  const removeItem = (id, data) => {
    return data.filter(item => item.id !== id);
  };

  const runLottery = () => {
    const results = generate(data);
    setResults(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={sticks} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div className="Top-Row">
          <RowEntry
            onAdd={team => {
              const index = data.length;
              setData([...data, { id: index, name: team, percentage: 0 }]);
            }}
          />
          <button onClick={() => setData([])}>Clear All</button>
          <button onClick={() => runLottery()}>Run Lottery</button>
        </div>
        <hr style={{ width: '100%' }}/>
        <Table
          data={data} 
          onUpdate={(id, value) => {
            setData(updateItem(id, value, data));
          }}
          onDelete={id => {
            setData(removeItem(id, data));
          }}
        />
        <Results results={results} />
      </body>
    </div>
  );
}

export default DraftMainScreen;
