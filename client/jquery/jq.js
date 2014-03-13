$(function(){

	$("ul.nav li").click(function(){
		console.log(this);
		$("li.active").removeClass('active');
		$(this).addClass('active');
	});
	$("a.brand").click(function(){
		$("li.active").removeClass('active');
	});
});