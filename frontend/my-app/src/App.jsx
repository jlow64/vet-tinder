import React from 'react'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <LoginPage /> 
          </Route>
          <Route exact path="/search">
            <div>List section</div>
          </Route>
      </Router>
    </div>
  );
}

export default App;
