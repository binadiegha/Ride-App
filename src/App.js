import React, {useEffect} from 'react'
import Home from "./components/home";
import Car from "./components/car";
import './App.less';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CarMusic from './components/carMusic';
import Driver from './components/driver';
import NamePlate from './components/namePlate';
import Errands from './components/errands';
import RideMode from './components/ride-mode';
import WelcomeMusic from './components/welcome-music';


function App() {

 

  return (

      <div className="holder">

      <div className="rotate">
      {/* <Home /> */}
      <Router>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/car/:id" component={Car}  />
          <Route path="/car-music" component={CarMusic}  />
          <Route path="/driver/:id" component={Driver}  />
          <Route path="/nameplate/:id" component={NamePlate}  />
          <Route path="/errands/:id" component={Errands}  />
          <Route path="/ride-mode/:id" component={RideMode}  />
          <Route path="/welcome-music/:id" component={WelcomeMusic}  />
        </Switch>
      </Router>

      </div>

      </div>

    
    
  );
}

export default App;
