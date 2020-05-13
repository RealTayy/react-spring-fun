import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Demo } from './pages';
import { Overlay } from './components/Overlay';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Overlay />
        {/* <div className="App__content">
          <Route path="/" exact component={Home} />
          <Route path="/demo" exact component={Demo} />
        </div> */}
      </Router>
    </div>
  );
}

export default App;
