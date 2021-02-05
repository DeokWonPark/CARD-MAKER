import './app.css';
import { BrowserRouter ,Switch, Route, useHistory} from 'react-router-dom';
import Header from './components/header/header'
import Login from './components/Login/login'
import Footer from './components/footer/footer'
import CardPage from './components/cardPage/cardPage';
import { useEffect, useState } from 'react';

function App(props) {

  const [card, setCard]=useState([
    
  ]);
  const [user,setUser]=useState(props.auth_service.user);
  const [token,setToken]=useState(props.auth_service.token);

  useEffect(()=>{
    if(sessionStorage.getItem('users')!==null){
      setUser(JSON.parse(sessionStorage.getItem('users'))['user']);
      setToken(JSON.parse(sessionStorage.getItem('users'))['token']);
      props.auth_service.user=JSON.parse(sessionStorage.getItem('users'))['user'];
      props.auth_service.token=JSON.parse(sessionStorage.getItem('users'))['token'];
    }
  },[])
  const dataRead=()=>{
    if(props.auth_service.user!==null){
      const userInfoRef=props.database.dataRead(props.auth_service.user.displayName);
      let datas;
      let card_temp=[];
      userInfoRef.on('value', (snapshot) => {
        datas = snapshot.val();
        if(datas!==null){
          card_temp=[...card];
          Object.keys(datas).map((data)=>{
            console.log(datas[data]);
            if(datas[data]!==null){
              card_temp.push(datas[data]);
            }
          });
          setCard(card_temp);
        }
      });
    }
  }

  const dataWrite=(cardItem)=>{
    props.database.dataWrite(props.auth_service.user.displayName,cardItem.username,cardItem.username,
      cardItem.company,cardItem.color,
      cardItem.title,cardItem.email,cardItem.description,cardItem.img,cardItem.imgName);
  }

  const dataDelete=async(cardItem)=>{
    await props.database.dataWrite(props.auth_service.user.displayName,cardItem.username,null,null,null,null,null,null,null,null);
    const newCard=[];
    card.map((item)=>{
      console.log(item.username);
      if(item.username!==cardItem.username){
        newCard.push(item);
      }
    });
    setCard(newCard);
    console.log("delete");
  }

  const handleLogout=async ()=>{
    console.log("logout");
    setCard([]);
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
            <CardPage
            card={card}
            auth={props.auth_service}
            onUpload={handlefileUpload}
            onAdd={dataWrite}
            onDelete={dataDelete}
            onRead={dataRead}
            ></CardPage>
          </div>
          <Footer></Footer>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
