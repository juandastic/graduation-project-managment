import React from 'react';
import './tailwind.output.css';
import { BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;
