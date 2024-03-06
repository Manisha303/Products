// App.js

import React from 'react';
import Sidebar from '../src/Components/Sidebar';
import Content from '../src/Components/Content';
import '../src/Components/Grid.css';
function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Content">
        <Content />
      </div>
    </div>
  );
}

export default App;
