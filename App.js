//import * as firebase from "firebase/app";
import  "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import * as firebase from 'firebase';
import React, { useState, useEffect, forceUpdate } from 'react';
import Home from './home'
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import {NavLink} from "react-router-dom";
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
//firebase.databaseRef.ref("reactvoluteapp/")

let firebaseConfig = {
  apiKey: "AIzaSyDcOPovRTKeVC9Atf2L5VfKRXor-w8kRgU",
  authDomain: "reactvoluteapp.firebaseapp.com",
  databaseURL: "https://reactvoluteapp.firebaseio.com",
  projectId: "reactvoluteapp",
  storageBucket: "reactvoluteapp.appspot.com",
  messagingSenderId: "326242631497",
  appId: "1:326242631497:web:180300d699b51002f66498",
  measurementId: "G-B7JR4WGPM6"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function databaseGet(){
  /*const firebaseConfig = {
    apiKey: "AIzaSyDcOPovRTKeVC9Atf2L5VfKRXor-w8kRgU",
    authDomain: "reactvoluteapp.firebaseapp.com",
    databaseURL: "https://reactvoluteapp.firebaseio.com",
    projectId: "reactvoluteapp",
    storageBucket: "reactvoluteapp.appspot.com",
    messagingSenderId: "326242631497",
    appId: "1:326242631497:web:180300d699b51002f66498",
    measurementId: "G-B7JR4WGPM6"
  }*/
  /*
  snap.key : он будет содержать порядковый номер каждого пользовательского элемента, поскольку мы храним их в массиве в нашей древовидной структуре JSON в базе данных Firebase.

Функция snap.val (): val () вернет объект пользователя, чтобы мы могли получить доступ к любому элементу в этом объекте, используя точечную запись.

snap : назначьте каждый пользовательский объект переменной user , на данный момент мне потребуется только одно значение из пользовательского объекта, которое есть . имя .

li.innerHTML: создайте элемент li и задайте имя пользователя, используя пользователя . имя значение.

child-key : установите атрибут с именем child-key в li, который будет иметь ключ каждого li.

child-key : установите атрибут с именем child-key в li, который будет иметь ключ каждого li.

userClicked : прикрепить событие click к списку, чтобы при любом щелчке пользователем слева мы могли отображать больше информации справа.

append: это добавит li к ul на каждой итерации.
----
Событие ChildAdded 
обычно используется для получения списка элементов в базе данных Firebase.
 Событие ChildAdded вызывается один раз для каждого существующего дочернего элемента, а затем снова 
 каждый раз, когда в указанный путь добавляется новый дочерний элемент. Слушателю передается снимок, содержащий данные нового дочернего элемента.
 ----
  */
  //firebase.initializeApp(firebaseConfig);
  
  const dbRef = firebase.database().ref(); //содержит ссылку на основной корень базы данных Firebase
/*dbRef.collection("users").get().then((snap)=>{
snap.docs.forEach((item)=>{
console.log(item)
})
})*/
  const usersRef = dbRef.child('users'); //Вторая строка содержит ссылку на  корневой ключ пользователя
  usersRef.on("child_added", function(snap){ //Получить список пользователей с помощью метода Child_Added () value есть ещё
    let user = snap.val();
    let snapKey = snap.key
    console.log(user.username)
    console.log(snap.key) //index
    console.log(typeof snapKey)
    let lastCharKeySnap = snapKey.substr(snapKey.length - 1)
    console.log(lastCharKeySnap)
  })

}
    /*
function databaseSet(){
  const dbRef = firebase.database().ref();
  const usersRef = dbRef.child('users');
  usersRef.child(0).set({"name": "Alex Meraz"})
  .then((res)=>{
    console.log(res)
  })
  
  .catch((e)=>{
    console.log(e)
  });
}
databaseSet()
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
*/
function divTextContent(e){
  window.textDiv = e.currentTarget.textContent
  console.log(window.textDiv)
}
function inputFunc(email, pass){
  window.email1 = email
  window.pass1 = pass
  console.log(email)
  console.log(pass)
  return email,pass
  
}
function submit(email2,pass2){
  firebase.auth().signInWithEmailAndPassword(email2, pass2)
.then(()=>{
  console.log("chetko")
  console.log(email2)
  console.log(window.textDiv)
  console.log(pass2)
  alert("all is ok")
  window.location.href = "home"
})
.catch(() => {
  console.log("window.textDiv")
  alert("ошибка авторизации попробуй ещё раз")
})
/*.then(firebase.auth().signInWithCustomToken(token).catch(function(error) {
  console.log(error.code)
  console.log(error.message)
  console.log(token)
}))*/
/*.catch(function() {
  console.log(email2)
  console.log(pass2)
});*/
}

function signUp(email2, pass2){
  
  firebase.auth().createUserWithEmailAndPassword(email2, pass2)
  .then((u) => {
    console.log(u)
    window.location.href = "home"
  })
  .catch((eror)=> {
    console.log(eror)
    alert("ошибка авторизации попробуй ещё раз")
    window.erorRegistr = eror
  })
}
/*
firebase.auth().signInWithCustomToken(token).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

*/
function setUser(){
  var database = firebase.database();
  database.ref('users/' + 9365).set({
    username: "Arsenii ",
    email: "programist",
    age: 19
  })

}
/*function aurhListener(){
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user.operationType)
    if(user == true){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  })
}*/


function App(props) {
  window.props = props
  const [isLogin, setLogin] = useState(false);
  function aurhListener(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setLogin(true)
      }
      else{
        setLogin(false)
      }
    }
    )
  }
  useEffect(() => {
    aurhListener()
    
  },[])
  /*let test = {
    message:"all ia okay object test"
  }
  if(window.erorRegistr == undefined){
    window.erorRegistr = test
  }*/
// props.match.url = "/ufuj"
//props.history.push("/ffffffff") set url 
/*if(isLogin == true){
  window.location.href = "home"
} */
return (
    <BrowserRouter>
    <div className="App">
  
      <Route exact path="/home" component={Home} />
  {isLogin ?  /* redirect real */<Switch><NavLink to="/home"><button>redirec</button></NavLink></Switch> : <div>not have login</div>}
       {isLogin && <Redirect from="" to="/home" />}
       <button onClick={()=>{
          databaseGet()
       }}>get user</button>
        <button onClick={()=>{
          setUser()
        }}>set user</button>
      <div>{
      /*if(!window.erorRegistr)( 
      
      <p>all is okay</p> 
      
      )

      else
      (

      <p>window.erorRegistr.message</p>
      
      )*/
      

      window.erorRegistr ? <div> {window.erorRegistr.message} </div> : <div onClick={(e) => {
        divTextContent(e)
  }}>all is ok</div>
      
      }</div>
        <input placeholder="email" onChange={(e)=>{
          let email = e.target.value
          inputFunc(email, window.pass1)
        }}/>
        <input placeholder="pass" onChange={(e)=>{
          let pass = e.target.value
          inputFunc(window.email1,pass)
        }}/>
        <button onClick={() => {
          submit(window.email1,window.pass1)
        }}>login</button>
        <button onClick={()=>{
          signUp(window.email1,window.pass1)
          //submit(window.email1,window.pass1)
        }}>registr</button>

    </div>
    </BrowserRouter>
  );
}
const App1 = withRouter(App);
export default App1;
