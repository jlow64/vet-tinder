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
            <List />
          </Route>
      </Router>
    </div>
  );
}

export default App;
