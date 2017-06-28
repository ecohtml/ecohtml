$(window).load(function(){
$('html').click(function(e) {   
if(!$(e.target).hasClass('btn-primary') && !$(e.target).hasClass('fa-caret-down') && !$(e.target).hasClass('btn-success'))
{
    document.getElementById('dropdown1').style.display = "none";
	document.getElementById('dropdownopen1').style.display = "block";
	document.getElementById('dropdownclose1').style.display = "none";
	
	document.getElementById('dropdown2').style.display = "none";
	document.getElementById('dropdownopen2').style.display = "block";
	document.getElementById('dropdownclose2').style.display = "none";
}
});    
});  