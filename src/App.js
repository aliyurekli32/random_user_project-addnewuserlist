import React from "react";
import mailSvg from "./assets/mail.svg";
//import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
//import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";
import {useState,useEffect} from "react";
import AddUser from "./components/footer/AddUser";

function App() {
  
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("");
  const [detail,setDetail] = useState("name")
  const [data,setData]=useState([]);

  const users =async ()=>{
    const url = "https://randomuser.me/api/";
    await axios(url).then((data)=>setUser(data.data.results)).catch(e=> console.log(e))
  }

  useEffect(() => {
  users()
  }, []);


const handleAdd =()=>{
  if(data.filter((item)=>item.email===user[0].email).length>0){
    return
  }else{
    setData([...data,user[0]])
  } 
}

  
  
  
  

console.log(data);
const handleNewUser = ()=>{
  users()
  setValue("")
  setDetail("");
}

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={user[0]?.picture.medium} alt="random user" className="user-img" />
          <p className="user-title">My-{ `${detail ? detail : "name" }`} -is</p>
          <p className="user-value">{`${value ? value : (user[0]?.name.first +" "+ user[0]?.name.last) }`}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onClick={(e)=> {setValue(user[0]?.name.first +" "+ user[0]?.name.last);setDetail("name")}}>
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button className="icon" data-label="email" onClick={(e)=> {setValue(user[0]?.email);setDetail("email")}}>
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age" onClick={(e)=> {setValue(user[0]?.dob.age);setDetail("age")}}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street" onClick={(e)=> {setValue(user[0]?.location.street.name);setDetail("street")}}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone" onClick={(e)=> {setValue(user[0]?.phone);setDetail("phone")}}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password" onClick={(e)=> {setValue(user[0]?.login.password);setDetail("password")}}>
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={()=> handleNewUser()}>
              new user
            </button>
            <button className="btn" type="button" onClick={(e)=> handleAdd()}>
              add user
            </button>
          </div>
          <AddUser data={data}/>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />

      </div>
    </main>
  );
}

export default App;
