const firebaseConfig = {
      apiKey: "AIzaSyDq7N0LiOFuSRHcyXYklHO8VSQEzagg3w0",
      authDomain: "adv-class-93.firebaseapp.com",
      databaseURL: "https://adv-class-93-default-rtdb.firebaseio.com",
      projectId: "adv-class-93",
      storageBucket: "adv-class-93.appspot.com",
      messagingSenderId: "149691269050",
      appId: "1:149691269050:web:a69468fbabce56a4c42783",
      measurementId: "G-RMV79HJ1CD"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      })
      localStorage.setItem("room_name",room_name);
      window.location="talkbook_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      localStorage.setItem("room_name",name);
      window.location="talkbook_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="talkbook.html";
}