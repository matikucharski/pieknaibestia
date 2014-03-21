$(function(){
	//TODO change it to do it on reload - without click
	var menuItem = Session.get('activeMenu');
	$("ul.nav li#"+menuItem).addClass('active');

	//highlights clicked menu item
	$("ul.nav li").click(function(){
		console.log(this);
		$("li.active").removeClass('active');
		$(this).addClass('active');
		//hides menu after click
		$("div.nav-collapse.collapse").collapse('hide');
	});
	//removes highlight from menu item
	$("a.brand").click(function(){
		$("li.active").removeClass('active');
	});
});