import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App(props) {

  return <BrowserRouter>
    <Switch>
      <Route path={["/","/login"]} exact={true}>
      </Route>
      <Route path={"/app"}>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
