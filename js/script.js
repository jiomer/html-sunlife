//返回顶部
$(function() {
	$("#totop").hide();
	$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 100) {
				$("#totop").show();
				$(".blogname").html("草榴<span class='names'>社区</span>");
			} else {
				$("#totop").hide();
				$(".blogname").html("Sun<span class='names'>Life</span>");
			}
		});
		$("#totop").click(function() {
			$('body,html').animate({ scrollTop: 0 }, 500);
			return false;
		});
		//可双击导航条返回顶部
		$("#fix").dblclick(function() {
			$('body,html').animate({ scrollTop: 0 }, 500);
			return false;
		});
	});
});
//导航条固定
$(document).on("scroll",function(){
			if($(document).scrollTop()>100){ 
				$("#fix").stop().animate({
					height:'45px',
					opacity:'0.5'
				},100);
			}else{
				$("#fix").stop().animate({
					height:'50px',
					opacity:'1'
				},400);
			}
			
});
