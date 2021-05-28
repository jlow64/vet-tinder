import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import FilterModal from './components/FilterModal'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

function App() {
  const [emailValid, setEmailValid] = useState(false);
  const [address, setAddress] = useState('');
  const [radius, setRadius] = useState(5);
  function emailValidTrue() {
    setEmailValid(true);
  }
  function emailValidFalse() {
    setEmailValid(false);
  }
  function passAddress(address) {
    setAddress(address);
  }
  function passRadius(radius) {
    setRadius(radius);
  }

  if (!emailValid) {
    return <div className='App'><LoginPage emailValidTrue={emailValidTrue} /></div>
  }

  return (
    <div className="App">
      <Router>
          <Route exact path="/">
          <FilterModal emailValidFalse={emailValidFalse} passAddress={passAddress} passRadius={passRadius} />
          </Route>
          <Route path="/Search">
           <div>{radius}</div>
          </Route>
      </Router>
    </div>
  );
}

export default App;
