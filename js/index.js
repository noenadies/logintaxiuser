<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>Flickering Login</title>
  
  
  
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body>

  <div class="background-wrap">
  <div class="background"></div>
</div>

<form id="accesspanel" action="login" method="post">
  <h1 id="litheader">AECEND</h1>
  <div class="inset">
    <p>
      <input id="idcedula" type="text" name="username"  placeholder="cedula">
    </p>
    <p>
      <input id="idcelular" type="text" name="password"  placeholder="celular">
    </p>
    <div style="text-align: center;">
      <div class="checkboxouter">
        <input type="checkbox" name="rememberme" id="remember" value="Remember">
        <label class="checkbox"></label>
      </div>
      <label id ="idlabel" for="remember">Remember me for 14 days</label>
      <label id ="idlabel2" for="remember">Remember me for 14 days</label>
    </div>
    <input class="loginLoginValue" type="hidden" name="service" value="login" />
  </div>
  <p class="p-container">
    <input type="submit" name="Login" id="go" value="Authorize" onclick="btaccion()">
     <input type="submit" name="Login" id="go" value="Authorize" onclick="btaccionuser()">
</form>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
   <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>

  <script>
  
var vreturn="";
var vid="1";
var vndpadre="";
var vndhijo="";
   function showAndroidToast(st1,st2,st3,st4) {

    vid=st1;
    vndpadre=st2;
    vndhijo=st3;
     // vreturn=st2;
    //alert("padre "+st2);
    if(vid=="1"){
vreturn=  window.Android.showToast(vid,vndpadre,vndhijo);}
   if(vid=="btaccionuser"){
vreturn=  window.Android.showToast("btaccionuser",vndpadre,vndhijo);}
if(st1=="3"){ document.getElementById("idlabel").innerHTML = vreturn;}if(st1=="4"){
 document.getElementById("idlabel2").innerHTML = vreturn;}
} 
   </script>

    <script  src="js/index.js"></script>




</body>

</html>
