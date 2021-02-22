// import logo from './logo.svg';
import React from 'react';
import './App.css';
import countries from './countries.json';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <CountriesList countries={countries}/>
      <Switch>
            <Route path="/:country">
              <CountryDetails countries={countries} />
            </Route>
          </Switch>

    </div>
  );
}
export default App;
