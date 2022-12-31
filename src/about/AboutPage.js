import React from 'react';

const style = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const AboutPage = () => {
  return (
    <div style={style.container}>
      <h1>About</h1>
      <h4>This is a collection of fun tools I use. (Work In Progress)</h4>
      <ul style={style.list}>
        <li style={style.listItem}>Draft Lottery Generator</li>
      </ul>
    </div>
  );
};

export default AboutPage;