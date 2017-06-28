function hometab(){
   document.getElementById('hometab').style.display = "block";
   document.getElementById('abouttab').style.display = "none";
   document.getElementById('profiletab').style.display = "none";
   document.getElementById('contacttab').style.display = "none";
   $("#hometabbtn").addClass('tabhead-active');
   $("#abouttabbtn").removeClass('tabhead-active');
   $("#profiletabbtn").removeClass('tabhead-active');
   $("#contacttabbtn").removeClass('tabhead-active');
}
function abouttab(){
   document.getElementById('hometab').style.display = "none";
   document.getElementById('abouttab').style.display = "block";
   document.getElementById('profiletab').style.display = "none";
   document.getElementById('contacttab').style.display = "none";
   $("#abouttabbtn").addClass('tabhead-active');
   $("#hometabbtn").removeClass('tabhead-active');
   $("#profiletabbtn").removeClass('tabhead-active');
   $("#contacttabbtn").removeClass('tabhead-active');
}
function profiletab(){
   document.getElementById('hometab').style.display = "none";
   document.getElementById('abouttab').style.display = "none";
   document.getElementById('profiletab').style.display = "block";
   document.getElementById('contacttab').style.display = "none";
   $("#profiletabbtn").addClass('tabhead-active');
   $("#hometabbtn").removeClass('tabhead-active');
   $("#abouttabbtn").removeClass('tabhead-active');
   $("#contacttabbtn").removeClass('tabhead-active');
}
function contacttab(){
   document.getElementById('hometab').style.display = "none";
   document.getElementById('abouttab').style.display = "none";
   document.getElementById('profiletab').style.display = "none";
   document.getElementById('contacttab').style.display = "block";
   $("#contacttabbtn").addClass('tabhead-active');
   $("#hometabbtn").removeClass('tabhead-active');
   $("#abouttabbtn").removeClass('tabhead-active');
   $("#profiletabbtn").removeClass('tabhead-active');
}