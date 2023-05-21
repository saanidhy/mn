 firebaseConfig = {
      apiKey: "AIzaSyADzYaM9_y44mQxkaqPDT5cviC0mxvaet0",
      authDomain: "application-a7c41.firebaseapp.com",
      databaseURL: "https://application-a7c41-default-rtdb.firebaseio.com",
      projectId: "application-a7c41",
      storageBucket: "application-a7c41.appspot.com",
      messagingSenderId: "256797221657",
      appId: "1:256797221657:web:acfd0b4c6279c92f4fdb88"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

 function send(){
      msg=document.getElementById("textbox").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("textbox").value="";

 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];

name_with_tag="<div><h4> "+name+":</h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4></div><hr>";

row=name_with_tag+message_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

 SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
}