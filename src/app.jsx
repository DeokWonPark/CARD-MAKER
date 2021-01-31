import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';

function App() {
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
