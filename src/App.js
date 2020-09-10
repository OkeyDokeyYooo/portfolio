import React, { useState } from 'react';

import Home from './components/Home'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Welcome />
      <Home />
    </div>
  );
}

export default App;
