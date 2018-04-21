$(document).ready(function() {

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

});

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
function btaccion(){
      unavesmensaje();
      vced=document.getElementById("idcedula").value;
vcel=document.getElementById("idcelular").value;
      validadcionuser(vcel,vced)

   // alert(vced+" "+ vcel);
}

function unavesmensaje()
{ firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
   general=snapshot.val();});}


var noregistro=true;
function validadcionuser(cel,ced){
for(var val in general){

   if(general[val].cel==cel&&general[val].cedula==ced){
 alert("encontrado login ");
 
 vnodep=val;

 showAndroidToast("3",vnodep,"","");
 noregistro=false;
   } 
}
if(noregistro){
alert("no encontrado login ");
}
}
