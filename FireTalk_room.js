Name = localStorage.getItem("UserName");
FirstLetter = Name.charAt(0);
console.log(Name);
console.log(FirstLetter);
document.getElementById("FT").innerHTML=FirstLetter;
randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById("FT").style.backgroundColor=randomColor;
console.log(randomColor);
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZwh_gJvpBy8umPZwKHGIC2Aodu2WXby0",
    authDomain: "firetalk-1ef32.firebaseapp.com",
    databaseURL: "https://firetalk-1ef32-default-rtdb.firebaseio.com",
    projectId: "firetalk-1ef32",
    storageBucket: "firetalk-1ef32.appspot.com",
    messagingSenderId: "352828258063",
    appId: "1:352828258063:web:c6fbac9308763bd6ad307a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  User_Name = localStorage.getItem("UserName");

  document.getElementById("userId_show").innerHTML="Weclome, "+User_Name+" !";

  function addRoom(){
    RoomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(RoomName).update(
          {
                purpose:"addingRoomName"
          }
    );
   localStorage.setItem("RoomName",RoomName);
   window.location="FireTalk_page.html" ;
}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name -"+Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("RoomName",name);
  window.location="FireTalk_page.html";
}
