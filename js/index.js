//$(document).ready(function() {

    var state = false;

    //$("input:text:visible:first").focus();

    $('#accesspanel').on('submit', function(e) {

        e.preventDefault();

        state = !state;

        if (state) {
            document.getElementById("litheader").className = "poweron";
            document.getElementById("go").className = "";
            document.getElementById("go").value = "Initializing...";
        }else{
            document.getElementById("litheader").className = "";
            document.getElementById("go").className = "denied";
            document.getElementById("go").value = "Access Denied";
        }

    });




///});

var vnodewebs;
var vced="";
var vcel="";
var vnodep="";
  var config = {
    apiKey: "AIzaSyA_L67YUVbfzQbgNLFbOylVyuQ6wF4Df_g",
    authDomain: "mototaxi-2b9d7.firebaseapp.com",
    databaseURL: "https://mototaxi-2b9d7.firebaseio.com",
    projectId: "mototaxi-2b9d7",
    storageBucket: "mototaxi-2b9d7.appspot.com",
    messagingSenderId: "424969414739"
  };
  firebase.initializeApp(config);



var general;


 unavesmensaje();
 //nodesuperpadre("areferenwebs");
//finirapnode("taxis",nhh,"cel");

  firebase.database().ref().child("areferenwebs").once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
  
    resfire =snapshot.val();

 });

  function finirapnode(tx,nh,n){
      firebase.database().ref().child(tx).child(String(nh)).once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
  
    //resfire =snapshot.val();
    alert(snapshot.val()[n]);

 });
  }


 vnodewebs=resfire;
 console.log("11 "+vnodewebs);
 m;
 function m(){for(var i in vnodewebs){
console.log("11m "+vnodewebs);
 }}
function btaccion(){
      unavesmensaje();
      vced=document.getElementById("idcedula").value;
vcel=document.getElementById("idcelular").value;
      validadcionuser(vcel,vced);
      btaccionuser();

if(vced=="" && vcel=="" && vndhijo!=""){}
    setTimeout(cuenta_atras, 3000);
}

function unavesmensaje()
{ firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
   general=snapshot.val();


 });

}
var resfire;
function nodesuperpadre(nd)

{  firebase.database().ref().child(nd).once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
  
  resfire =snapshot.val();

 });
}


var noregistro=true;
function validadcionuser(cel,ced){
for(var val in general){

   if(general[val].cel==cel&&general[val].cedula==ced){
 alert("encontrado login ");
 
 vnodeh=val;
showAndroidToast("1","taxis",vnodeh,"");

secintervalo();
 //showAndroidToast("3",vnodep,"","");
  //showAndroidToast("4",vnodep,"","");
 noregistro=false;
   } 
}
if(noregistro){
alert("no encontrado login ");
}
}

var viniinterval=true;
function secintervalo(){
 // if(viniinterval){
   // viniinterval=false;
setTimeout(cuenta_atras, 3000);

//}
}

function cuenta_atras(){
 
//window.location="https://noenadies.github.io/taxistasservicio";
window.location="https://noenadies.github.io/taxistasservicio/";

}

function btaccionuser(){
 // showAndroidToast("btaccionuser","","","");
}

//window.location="https://www.youtube.com/watch?v=GAOBXGPuKqo";
//location.href = "http://www.cnn.com";
