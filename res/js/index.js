layui.use(["layer"]);

$(document).ready(function(){
  	$("#txt").load("test.txt");
  	$(".btnTest").on("click",function(){
  		layer.alert("welcome!");
  	})
});