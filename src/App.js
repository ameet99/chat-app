import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import Conversation from "./components/Conversation";
import './styles.css'

const App = () => {
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
