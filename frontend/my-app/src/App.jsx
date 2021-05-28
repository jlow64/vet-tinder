import React from 'react'
import LoginPage from './components/LoginPage'
import FilterModal from './components/FilterModal'
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
      </Router>
    </div>
  );
}

export default App;
