$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").slideDown("medium");
	$("#panel2").slideUp("medium");
	$("#panel3").slideUp("medium");
  });
});
$(document).ready(function(){
  $("#flip2").click(function(){
    $("#panel1").slideUp("medium");
	$("#panel2").slideDown("medium");
	$("#panel3").slideUp("medium");
  });
});
$(document).ready(function(){
  $("#flip3").click(function(){
    $("#panel1").slideUp("medium");
	$("#panel2").slideUp("medium");
	$("#panel3").slideDown("medium");
  });
});