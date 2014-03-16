$(function(){

	//highlights clicked menu item
	$("ul.nav li").click(function(){
		console.log(this);
		$("li.active").removeClass('active');
		$(this).addClass('active');
	});
	//removes highlight from menu item
	$("a.brand").click(function(){
		$("li.active").removeClass('active');
	});
});