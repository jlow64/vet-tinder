import React from 'react'
import LoginPage from './components/loginPage'
import FilterModal from './components/FilterModal'
import List from './components/List'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <LoginPage /> 
          </Route>
          <Route exact path="/FilterModal">
            <FilterModal />
          </Route>
          <Route exact path="/List">
            <List location= {{lat: -36.8769998, lng: 174.7102575}} radius={5}/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
