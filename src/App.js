import React from 'react';
import './tailwind.output.css';
import { HashRouter, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Content />
      </div>
    </HashRouter>
  );
}

export default App;
