// src/App.js

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import Conversation from "./components/Conversation";
import './styles.css'

function App() {
  return (
    <Router>
      <div className="app">
        <LeftSidebar />
        <div className="conversation-view">
          <Switch>
            <Route path="/conversation/:id" component={Conversation} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


// https://docs.google.com/document/d/1XswBiDExN1zams_cLzKTgZ2PB7Q0gkJoImNvOE2rh6s/edit