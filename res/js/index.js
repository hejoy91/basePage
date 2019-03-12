layui.use(["layer"]);
var contentOpen = false;
var bindClick = function(){
	$(".loging").on("dblclick",function(){
		if(!contentOpen){
			contentOpen = true;
			$(".content-main .zw .loging").css("overflow-y","scroll");
			$(".mouse").hide();
			//$(".content-main .zw .loging").addClass("overflow-scroll");
			layer.open({
				type: 1,
				content: $(this),
				title: "回忆是一本苦涩的书",
				closeBtn: 0,
				shadeClose: true,
				shade: 0.6,
				area:["600px",],
				end: function(){
					contentOpen = false;
					$(".content-main .zw .loging").css("overflow-y","hidden");
					$(".mouse").show();
				}
			})
		}
	});
}
$(document).ready(function(){
  	$("#txt").load("test.txt");
  	$(".btnTest").on("click",function(){
  		layer.alert("welcome!");
  	})
  	bindClick();
});