import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/login/login';
import CardMaker from './components/cardMaker/cardMaker';

function App({authService}) {

  return <BrowserRouter>
    <Switch>
      <Route path={["/","/login"]} exact={true}>
        <Login authService={authService}></Login>
      </Route>
      <Route path={"/cardmaker"}>
        <CardMaker authService={authService}></CardMaker>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
