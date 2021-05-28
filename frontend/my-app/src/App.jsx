import React, { useState } from 'react'
import LoginPage from './components/loginPage'
import FilterModal from './components/FilterModal'
import MapView from "./components/MapView";
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

function App() {
  const [emailValid, setEmailValid] = useState(false);
  function emailValidTrue() {
    setEmailValid(true);
  }
  function emailValidFalse() {
    setEmailValid(false);
  }

  if (!emailValid) {
    return <LoginPage emailValidTrue={emailValidTrue} />
  }

  return (
    <div className="App">
      <Router>
          <Route exact path="/">
          <FilterModal emailValidFalse={emailValidFalse}/>
          </Route>
          <Route exact path="/map">
          <MapView/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
