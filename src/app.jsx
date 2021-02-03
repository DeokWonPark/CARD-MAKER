import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import Header from './components/header/header'
import Login from './components/Login/login'
import Footer from './components/footer/footer'
import CardPreview from './components/cardPreview/cardPreview';
import CardMaker from './components/cardMaker/cardMaker';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';


function App(props) {

  const [card, setCard]=useState([
    {
        name:"ellie",
        company:"Kakao",
        color:"Light",
        Title:"SoftEnginner",
        email:"ejrdnjs96@gmail.com",
        discription:"Heool world",
        img:"./images/default_logo.png"
    },
    {
      name:"ejrdnjs",
      company:"Naver",
      color:"Light",
      Title:"SoftEnginner",
      email:"ejrdnjs97@gmail.com",
      discription:"Heool world",
      img:"./images/default_logo.png"
  },
  {
    name:"guswns",
    company:"NHN",
    color:"Light",
    Title:"SoftEnginner",
    email:"ejrdnjs98@gmail.com",
    discription:"Heool world",
    img:"./images/default_logo.png"
  },
  {},
  // {
  //   name:"ellie",
  //   company:"Kakao",
  //   color:"Light",
  //   Title:"SoftEnginner",
  //   email:"ejrdnjs99@gmail.com",
  //   discription:"Heool world",
  //   img:"./images/default_logo.png"
  // },
  ]);

  const handleLogout=async ()=>{
    console.log("logout");
    //await props.auth_service.logout();
    await props.auth_service.logout();
    return props.auth_service.user;
  }

  const handlefileUpload=async (files,cardItem)=>{
    console.log(files);
    if(files.length!==0){
      const img_info=await props.clouldnary.uploadfile(files);
      const card_temp=card.map((item)=>{
        if(item.email===cardItem.email){
          return {...cardItem,img:img_info.secure_url};
        }
        return item;
      });
      setCard(card_temp);
      console.log(card_temp);
      // const card[0]={...card,count:1}
      return img_info;
    }
  }

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
          <Header onLogout={handleLogout}></Header>
          <div className="contents">
            <CardMaker card={card} onUpload={handlefileUpload}></CardMaker>
            <CardPreview card={card}></CardPreview>
          </div>
          <Footer></Footer>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
