import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, AddFriend, Friends, FriendsDetail } from './pages';

import './App.scss';
const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="App__navbar">
          <Navbar />
        </div>
        <div className="App__content">
          <Route path="/" exact component={Home} />
          <Route path="/add-friend" exact component={AddFriend} />
          <Route path="/friends" exact component={Friends} />
          <Route path="/friends/:id" exact component={FriendsDetail} />
        </div>
      </Router>
    </div>
  );
}

export default App;
