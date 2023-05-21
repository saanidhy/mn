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

document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}