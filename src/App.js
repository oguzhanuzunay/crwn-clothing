import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const hatsPage = () => {
  return (
    <div>
      <h1>THİS İS HAT PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
