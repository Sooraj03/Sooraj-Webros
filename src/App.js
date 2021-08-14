import Home from "./components/home.js";
import './App.css';
import React from "react";
import Chat from "./components/Chat.js";
import Contact from "./components/Contact.js";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">

    <Router>
    
    
    <Switch>
     <Route exact path='/' component={Home}/>
    <Route path='/Contact' component={Contact}/>
    <Route path='/Chat' component={Chat}/>
    </Switch>
    </Router>
    
    </div>
  );
}

export default App;
