$(function(){
	$(".notice_list li").click(function(){
		$(this).children("div").slideToggle();
		$(this).siblings().children("div").slideUp();
	});
	$(".questions_list li").click(function(){
		$(this).children("div").slideToggle();
		$(this).siblings().children("div").slideUp();
	});
});