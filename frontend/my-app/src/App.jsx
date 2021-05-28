import React from 'react'
import LoginPage from './components/LoginPage'
import FilterModal from './components/FilterModal'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import './App.css'

function App() {
  return (
    <div className="App">
      <LoginPage />
      <FilterModal />
    </div>
  );
}

export default App;
