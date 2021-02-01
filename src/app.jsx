import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import Header from './components/header/header'
import Login from './components/Login/login'
import Footer from './components/footer/footer'
import CardPreview from './components/cardPreview/cardPreview';
import CardMaker from './components/cardMaker/cardMaker';
import { useState } from 'react';


function App(props) {

  return <BrowserRouter>
    <Switch>
      <Route path={["/","/login"]} exact={true}>
        <div className="container">
          <div className="login">
            <Header></Header>
            <Login authObj={props.auth_service}></Login>
            <Footer></Footer>
          </div>
        </div>
      </Route>
      <Route path={"/app"}>
        <div className="main">
          <Header></Header>
          <CardMaker></CardMaker>
          <CardPreview></CardPreview>
          <Footer></Footer>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
