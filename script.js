const firebaseConfig = {
    apiKey: "AIzaSyAklW97wx4OqC58PWCQAtEjoiljR-Y9kkA",
    authDomain: "loginform-8841c.firebaseapp.com",
    databaseURL: "https://loginform-8841c-default-rtdb.firebaseio.com",
    projectId: "loginform-8841c",
    storageBucket: "loginform-8841c.firebasestorage.app",
    messagingSenderId: "344641619523",
    appId: "1:344641619523:web:dd0e036995ef9a0590f6f6"
  };
  //initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);
  //reference your database
var loginFormDB = firebase.database().ref('LoginForm');
document.getElementById("loginform").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementval("name");
    var username = getElementval("uname");
    var password = getElementval("password");
    
    console.log(name,username,password);
}
const getElement = (id) => {
    return document.getElementById(id).Value;
}
