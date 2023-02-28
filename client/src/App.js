import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'  
import { LandingPage } from './Pages/LandingPage'
import { Home } from './Pages/Home'
import { Created  } from './Pages/Created'
import { Detail } from './Pages/Detail'

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Switch>
      <Route exact path = '/'> <LandingPage/> </Route>
      <Route exact path = '/home'><Home/> </Route>
      <Route exact path = '/details/:id'><Detail/> </Route>
      <Route exact path = '/created'><Created/> </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
