function onload(){
document.getElementById('opsetdiv').style.display = "none";
}
function openmenu(){
document.getElementById('respnav').style.display = "block";
document.getElementById('closemenudiv').style.display = "block";
document.getElementById('openmenudiv').style.display = "none";
}
function closemenu(){
document.getElementById('respnav').style.display = "none";
document.getElementById('closemenudiv').style.display = "none";
document.getElementById('openmenudiv').style.display = "block";
}

function closenav(){
document.getElementById('navin').style.display = "none";
document.getElementById('navelementcl').style.display = "none";
document.getElementById('navelementop').style.display = "block";
}
function openav(){
document.getElementById('navin').style.display = "block";
document.getElementById('navelementop').style.display = "none";
document.getElementById('navelementcl').style.display = "block";
}
function closenav1(){
document.getElementById('navin1').style.display = "none";
document.getElementById('navelementcl1').style.display = "none";
document.getElementById('navelementop1').style.display = "block";
}
function openav1(){
document.getElementById('navin1').style.display = "block";
document.getElementById('navelementop1').style.display = "none";
document.getElementById('navelementcl1').style.display = "block";
}
function closesetting(){
document.getElementById('clsetting').style.display = "none";
document.getElementById('clsetdiv').style.display = "none";
document.getElementById('opsetdiv').style.display = "block";
}
function opensetting(){
document.getElementById('clsetting').style.display = "block";
document.getElementById('clsetdiv').style.display = "block";
document.getElementById('opsetdiv').style.display = "none";
}