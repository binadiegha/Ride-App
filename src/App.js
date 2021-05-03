import React from 'react'
import Home from "./components/home";
import Car from "./components/car";
import './App.less';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CarMusic from './components/carMusic';
import Driver from './components/driver';

function App() {
  return (
    <>
     {/* <Home /> */}
     <Router>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/car/:id" component={Car}  />
        <Route path="/car-music" component={CarMusic}  />
        <Route path="/driver/:id" component={Driver}  />
      </Switch>
    </Router>

    </>
    
  );
}

export default App;
