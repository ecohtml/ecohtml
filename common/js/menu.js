function onload(){
document.getElementById('uielem').style.display = "none";
document.getElementById('uiclose').style.display = "none";
document.getElementById('datatableclose').style.display = "none";
document.getElementById('datatable').style.display = "none";
/* Collapse Sliders */
document.getElementById('collapse2').style.display = "none";
document.getElementById('collapse3').style.display = "none";
}
function uieleclose(){
document.getElementById('uielem').style.display = "none";
document.getElementById('uiclose').style.display = "none";
document.getElementById('uiopen').style.display = "block";
}
function uieleopen(){
document.getElementById('uielem').style.display = "block";
document.getElementById('uiclose').style.display = "block";
document.getElementById('uiopen').style.display = "none";
}
function datatableclose(){
document.getElementById('datatable').style.display = "none";
document.getElementById('datatableclose').style.display = "none";
document.getElementById('datatableopen').style.display = "block";
}
function datatableopen(){
document.getElementById('datatable').style.display = "block";
document.getElementById('datatableclose').style.display = "block";
document.getElementById('datatableopen').style.display = "none";
}