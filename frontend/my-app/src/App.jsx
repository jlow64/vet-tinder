
import React, { useState } from 'react'
import LoginPage from "./components/LoginPage"
import FilterModal from './components/FilterModal'
import List from './components/List'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

function App() {
  // The states were defined to pass props into children so they could be used later
  // First use state passes a flag whether an email is in a database or not
  const [emailValid, setEmailValid] = useState(false);
  // Address is a use state part of a nice to have, to have an automatically filling address searchbar with google API
  const [address, setAddress] = useState('');
  // used by the List component to find vets within a specified radius. Not currently used
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
  // This conditional display the login screen only if the inputed email address is valid
  if (!emailValid) {
    return <div className='App'><LoginPage emailValidTrue={emailValidTrue} /></div>
  }
  // Used routes to create some page navigation
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
          <FilterModal emailValidFalse={emailValidFalse} passAddress={passAddress} passRadius={passRadius} />
          </Route>
          <Route path="/List" exact component={List} />
      </Router>
    </div>
  );
}

export default App;
